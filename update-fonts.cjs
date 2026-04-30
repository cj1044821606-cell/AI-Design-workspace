const fs = require('fs');
const path = require('path');

const files = [
  'CatalogSpread06.tsx',
  'CatalogSpread07.tsx',
  'CatalogSpread08.tsx',
  'CatalogSpread09.tsx',
  'CatalogSpread10.tsx',
  'CatalogSpread11.tsx',
  'CatalogSpread12.tsx',
  'CatalogSpread13.tsx'
];

files.forEach(file => {
  const filePath = path.join(__dirname, 'src/components', file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 1. Replace "Product Features" title
    content = content.replace(
      /<h2 className="text-\[#ED1651\] font-medium text-\[31\.62pt\] leading-none tracking-tight">/g,
      '<h2 className="text-[#ED1651] font-medium text-[31.621pt] leading-none tracking-tight" style={{ fontFamily: \'"MiSans", sans-serif\' }}>'
    );

    // 2. Replace feature sub-title
    content = content.replace(
      /<h3 className="text-\[#010202\] font-medium text-\[12pt\]">/g,
      '<h3 className="text-[#010202] font-medium text-[12pt]" style={{ fontFamily: \'"MiSans", sans-serif\' }}>'
    );

    // 3. Replace feature body text
    content = content.replace(
      /<p className="text-\[#5A5A5C\] text-\[8pt\] leading-\[1\.4\]">/g,
      '<p className="text-[#5A5A5C] font-normal text-[8pt] leading-[1.4]" style={{ fontFamily: \'"MiSans", sans-serif\' }}>'
    );

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  } else {
    console.log(`File not found: ${file}`);
  }
});
