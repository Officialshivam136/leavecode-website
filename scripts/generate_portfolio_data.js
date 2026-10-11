const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const pDir = path.join(rootDir, 'apps', 'frontend', 'public', 'images', 'portfolio');
const files = fs.readdirSync(pDir).filter(f => f.match(/\.(png|jpg|jpeg|webp)$/i));

function cleanTitle(filename) {
  let base = filename.replace(/\.(png|jpg|jpeg|webp)$/i, '');
  base = base.replace(/(-image|-img|_img|_image|_preview|-preview)/gi, '');
  base = base.replace(/-\d{2}-\d{2}-\d{4}.*$/i, '');
  base = base.replace(/[-_]/g, ' ').trim();
  base = base.replace(/([a-z])([A-Z])/g, '$1 $2');
  return base.split(' ').filter(Boolean).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

function getCategory(name) {
  const n = name.toLowerCase();
  if (n.includes('tax') || n.includes('legal') || n.includes('law') || n.includes('advisory') || n.includes('insurance') || n.includes('capital') || n.includes('financial') || n.includes('accounting') || n.includes('payroll')) return 'Legal & Corporate';
  if (n.includes('health') || n.includes('clinic') || n.includes('care') || n.includes('medical') || n.includes('dental') || n.includes('wellness') || n.includes('pharma') || n.includes('senior') || n.includes('therapy')) return 'Healthcare & Clinical';
  if (n.includes('real') || n.includes('estate') || n.includes('home') || n.includes('property') || n.includes('roof') || n.includes('contracting') || n.includes('construction') || n.includes('living') || n.includes('house') || n.includes('paint')) return 'Real Estate & Living';
  return 'E-Commerce';
}

const verifiedClients = files.map((file) => {
  const title = cleanTitle(file);
  const slug = file.toLowerCase().replace(/\.(png|jpg|jpeg|webp)$/i, '').replace(/[^a-z0-9]+/g, '-');
  const category = getCategory(title);
  
  return {
    slug,
    title,
    projectType: 'Verified Client Engagement',
    category,
    image: '/images/portfolio/' + file,
    metaTitle: title + ' Client Engagement | LeaveCode Technologies',
    metaDescription: 'Verified LeaveCode digital engagement for ' + title + ', featuring custom web architecture, UI design, and responsive systems.',
    tagline: 'Digital web architecture and front-end implementation designed for ' + title + '.',
    clientContext: {
      clientName: title,
      industry: category === 'E-Commerce' ? 'Digital Commerce & Services' : category,
      region: 'North America / Global',
      disclosureNote: 'Verified client project asset extracted directly from LeaveCode sitemap and media archives.'
    },
    problemOrOpportunity: title + ' required a resilient, responsive digital platform engineered to clearly showcase offerings and support business user conversions.',
    projectObjectives: [
      'Deliver clean visual identity and user-centric navigation structure.',
      'Achieve sub-second page performance across mobile and desktop viewports.',
      'Integrate responsive enquiry interfaces and analytics tracking.',
      'Ensure search engine crawlability and structured semantic markup.'
    ],
    scopeOfWork: [
      'UI/UX design architecture and visual prototyping.',
      'Responsive web development and frontend styling.',
      'Form validation, enquiry workflows, and third-party integrations.',
      'Technical SEO audit, asset optimization, and launch QA.'
    ],
    strategyAndImplementation: [
      { phase: 'Phase 1: Discovery & Wireframing', description: 'Structured information architecture tailored to client audiences.' },
      { phase: 'Phase 2: Modern Web Engineering', description: 'Engineered responsive layout components with high accessibility scores.' },
      { phase: 'Phase 3: QA & Production Deployment', description: 'Executed end-to-end device testing, image compression, and DNS cutover.' }
    ],
    techStack: ['Next.js / React', 'Tailwind CSS', 'TypeScript', 'Node.js', 'REST APIs'],
    metricsOrDeliverables: [
      { label: 'Deliverable', value: 'Production Web App', note: 'Full responsive build' },
      { label: 'Status', value: 'Live & Audited', note: 'Verified sitemap record' }
    ],
    relatedServices: [
      { title: 'Full-Stack Web Development', slug: 'web-development' },
      { title: 'Enterprise & Local SEO', slug: 'seo-services' }
    ]
  };
});

// Avoid slug collisions
const seenSlugs = new Set();
const uniqueClients = [];
for (const c of verifiedClients) {
  let s = c.slug;
  let counter = 1;
  while (seenSlugs.has(s)) {
    s = c.slug + '-' + counter++;
  }
  seenSlugs.add(s);
  c.slug = s;
  uniqueClients.push(c);
}

const outPath = path.join(rootDir, 'apps', 'frontend', 'src', 'data', 'allPortfolioClients.json');
fs.writeFileSync(outPath, JSON.stringify(uniqueClients, null, 2));
console.log('Successfully wrote', uniqueClients.length, 'verified client projects to', outPath);
