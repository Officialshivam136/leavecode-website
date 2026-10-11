const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const listPath = path.join(projectRoot, 'all_sitemap_images.json');
const list = JSON.parse(fs.readFileSync(listPath, 'utf8'));

// Directories
const extractedDir = path.join(projectRoot, 'apps', 'frontend', 'public', 'images', 'extracted');
const portfolioDir = path.join(projectRoot, 'apps', 'frontend', 'public', 'images', 'portfolio');

if (!fs.existsSync(extractedDir)) fs.mkdirSync(extractedDir, { recursive: true });
if (!fs.existsSync(portfolioDir)) fs.mkdirSync(portfolioDir, { recursive: true });

function downloadUrl(url, dest) {
  return new Promise((resolve) => {
    if (fs.existsSync(dest) && fs.statSync(dest).size > 0) {
      return resolve({ url, dest, status: 'exists' });
    }

    const client = url.startsWith('https:') ? https : http;
    const req = client.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      },
      timeout: 20000
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (!redirectUrl.startsWith('http')) {
          const origin = new URL(url).origin;
          redirectUrl = origin + redirectUrl;
        }
        return downloadUrl(redirectUrl, dest).then(resolve);
      }
      if (res.statusCode !== 200) {
        return resolve({ url, status: 'error', code: res.statusCode });
      }

      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve({ url, dest, status: 'downloaded', size: fs.statSync(dest).size });
      });
      fileStream.on('error', (err) => {
        fs.unlink(dest, () => {});
        resolve({ url, status: 'error', error: err.message });
      });
    });

    req.on('error', (err) => resolve({ url, status: 'error', error: err.message }));
    req.on('timeout', () => {
      req.destroy();
      resolve({ url, status: 'timeout' });
    });
  });
}

async function run() {
  console.log('Downloading ' + list.length + ' images...');
  const portfolioSet = new Set(JSON.parse(fs.readFileSync(path.join(projectRoot, 'portfolio_images.json'), 'utf8')));

  let downloaded = 0;
  let exists = 0;
  let errors = 0;

  const concurrency = 6;
  for (let i = 0; i < list.length; i += concurrency) {
    const batch = list.slice(i, i + concurrency);
    const promises = batch.map((imgUrl) => {
      const filename = path.basename(new URL(imgUrl).pathname);
      const isPortfolio = portfolioSet.has(imgUrl) || filename.includes('-img.') || filename.includes('mockup') || filename.includes('preview');
      const targetDir = isPortfolio ? portfolioDir : extractedDir;
      const targetPath = path.join(targetDir, filename);
      return downloadUrl(imgUrl, targetPath);
    });

    const results = await Promise.all(promises);
    for (const r of results) {
      if (r.status === 'downloaded') downloaded++;
      else if (r.status === 'exists') exists++;
      else {
        errors++;
        console.warn('Failed:', r.url, r.status, r.code || r.error);
      }
    }
    console.log(`[${Math.min(i + concurrency, list.length)}/${list.length}] Downloaded: ${downloaded}, Cached: ${exists}, Errors: ${errors}`);
  }

  console.log('Finished image sync!');
  console.log('Portfolio files:', fs.readdirSync(portfolioDir).length);
  console.log('Extracted files:', fs.readdirSync(extractedDir).length);
}

run();
