const fs = require('fs');
const path = require('path');

function replaceAlt(filePath, altText) {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/alt=""/g, `alt="${altText}"`);
    fs.writeFileSync(filePath, content, 'utf8');
  }
}

replaceAlt(path.join(__dirname, 'app', 'services', 'wood-paint-polish', 'page.jsx'), 'Premium Wood Polish and Paint Dubai');
replaceAlt(path.join(__dirname, 'app', 'services', 'sign-boards', 'page.jsx'), 'Custom 3D Sign Boards Dubai');
replaceAlt(path.join(__dirname, 'app', 'services', 'gypsum-ceiling', 'page.jsx'), 'Luxury Gypsum Ceiling Fit-out Dubai');

const homePath = path.join(__dirname, 'app', 'page.js');
if (fs.existsSync(homePath)) {
  let content = fs.readFileSync(homePath, 'utf8');
  content = content.replace(/alt="Blueprint"/g, 'alt="Bespoke Joinery Blueprint Dubai"');
  fs.writeFileSync(homePath, content, 'utf8');
}

console.log('Alt tags updated');
