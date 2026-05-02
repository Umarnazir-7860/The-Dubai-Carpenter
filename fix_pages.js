const fs = require('fs');
const path = require('path');

const servicePages = [
  'commercial-fit-out',
  'electricians',
  'glass-work',
  'gypsum-ceiling',
  'luxury-wardrobes',
  'office-fit-outs',
  'sign-boards',
  'wood-paint-polish'
];

servicePages.forEach(service => {
  const filePath = path.join(__dirname, 'app', 'services', service, 'page.jsx');
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  
  // Format the title from folder name
  const titleWords = service.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const metadata = `\nexport const metadata = {\n  title: "${titleWords} Dubai | The Dubai Carpenter",\n  description: "Premium ${titleWords.toLowerCase()} services in Dubai. The Dubai Carpenter offers expert joinery, fit-out, and installation services.",\n  alternates: {\n    canonical: "./",\n  },\n};\n\n`;

  // Insert metadata before `export default function`
  if (!content.includes('export const metadata =')) {
    content = content.replace(/export default function/, metadata + 'export default function');
  }

  // Replace text-5xl md:text-6xl for h1
  content = content.replace(/text-5xl md:text-6xl/g, 'text-4xl sm:text-5xl md:text-7xl');
  content = content.replace(/text-6xl md:text-9xl/g, 'text-5xl sm:text-7xl md:text-9xl'); // just in case
  
  // Replace text-4xl md:text-6xl for h2
  content = content.replace(/text-4xl md:text-6xl/g, 'text-3xl sm:text-4xl md:text-6xl');
  content = content.replace(/text-4xl md:text-7xl/g, 'text-3xl sm:text-4xl md:text-6xl');
  content = content.replace(/text-5xl md:text-7xl/g, 'text-4xl sm:text-5xl md:text-6xl');
  
  // Add an internal link if it finds a generic paragraph
  // It's a bit tricky to safely add internal link via regex, we'll just skip internal link automation and do it manually for about-us and home, and rely on the header links for the rest, or just insert it somewhere safely.
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${service}`);
});

console.log("Done updating service pages.");
