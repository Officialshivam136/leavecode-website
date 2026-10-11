const https = require('https');
const fs = require('fs');

function fetch(url) {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', () => resolve(''));
  });
}

async function analyzeCTR() {
  const html = await fetch('https://leavecode.com/');
  
  // Extract all links & buttons
  const linkMatches = [...html.matchAll(/<a[^>]*href=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi)];
  const ctas = [];
  for (const m of linkMatches) {
    const href = m[1];
    const text = m[2].replace(/<[^>]+>/g, '').trim();
    if (text && (href.includes('contact') || href.includes('quote') || href.includes('tel:') || href.includes('mailto:') || href.includes('form') || href.includes('package') || text.toLowerCase().includes('get') || text.toLowerCase().includes('call') || text.toLowerCase().includes('book') || text.toLowerCase().includes('start') || text.toLowerCase().includes('more') || text.toLowerCase().includes('enquir') || text.toLowerCase().includes('inquir'))) {
      ctas.push({ text, href });
    }
  }

  // Extract phone numbers and WhatsApp links
  const phones = [...html.matchAll(/href=["'](tel:[^"']*)["']/gi)].map(m => m[1]);
  const whatsapps = [...html.matchAll(/href=["']([^"']*whatsapp[^"']*)["']/gi)].map(m => m[1]);
  const emails = [...html.matchAll(/href=["'](mailto:[^"']*)["']/gi)].map(m => m[1]);
  
  // Extract real text snippets
  const paragraphs = [...html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)]
    .map(m => m[1].replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').trim())
    .filter(t => t.length > 50);

  console.log('=== REAL LEAVECODE.COM CTR ELEMENTS ===');
  console.log('Unique CTR Links Count:', ctas.length);
  console.log('Sample CTAs:', ctas.slice(0, 15));
  console.log('Phone CTAs:', [...new Set(phones)]);
  console.log('WhatsApp CTAs:', [...new Set(whatsapps)]);
  console.log('Email CTAs:', [...new Set(emails)]);
  console.log('\n=== REAL TEXT PARAGRAPHS FROM SITE ===');
  paragraphs.slice(0, 6).forEach((p, idx) => console.log(`[P${idx+1}]`, p, '\n'));
}

analyzeCTR();
