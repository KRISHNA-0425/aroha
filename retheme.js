const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else {
      if (dirFile.endsWith('.tsx')) {
        filelist.push(dirFile);
      }
    }
  });
  return filelist;
};

const map = {
  // Text colors
  'text-amber-950': 'text-[#070546]',
  'text-amber-900': 'text-[#3D3B63]',
  'text-amber-800': 'text-[#3D3B63]',
  'text-foreground': 'text-[#070546]',
  'text-muted-foreground': 'text-[#3D3B63]',
  
  // Backgrounds & Accents
  'bg-earthy-rust': 'bg-[#9E8EB3]',
  'bg-earthy-forest': 'bg-[#3D3B63]',
  'bg-earthy-clay': 'bg-[#D9D9D9]',
  'bg-earthy-sun': 'bg-[#E8E3F7]',
  'bg-earthy-ochre': 'bg-[#9E8EB3]',
  'bg-sage': 'bg-[#9E8EB3]',
  'bg-sage-dark': 'bg-[#3D3B63]',
  'bg-sage/10': 'bg-[#9E8EB3]/20',
  'bg-fog/30': 'bg-[#D9D9D9]/40',
  'bg-fog': 'bg-[#D9D9D9]',
  'bg-background': 'bg-[#E8E3F7]',
  
  // Borders
  'border-amber-900': 'border-[#070546]',
  'border-amber-800': 'border-[#3D3B63]',
  'border-earthy-forest': 'border-[#9E8EB3]',
  
  // Custom colors inside gradients
  'from-earthy-rust': 'from-[#9E8EB3]',
  'via-earthy-forest': 'via-[#3D3B63]',
  'to-earthy-ochre': 'to-[#D9D9D9]',
  'from-earthy-ochre': 'from-[#D9D9D9]',
  'to-earthy-sun': 'to-[#E8E3F7]',
  'from-earthy-forest': 'from-[#3D3B63]',
  'via-earthy-rust': 'via-[#9E8EB3]',
  'to-earthy-clay': 'to-[#D9D9D9]',
  'from-cream-warm': 'from-[#E8E3F7]',
  'to-background': 'to-[#E8E3F7]',
  'via-background': 'via-[#E8E3F7]',

  // Other specific instances
  'bg-amber-800': 'bg-[#070546]',
  'bg-amber-900': 'bg-[#070546]',
  'text-sage-dark': 'text-[#3D3B63]',
  'ring-amber-900': 'ring-[#070546]'
};

const regexes = [
  // replace specific classes
  { from: /\btext-amber-950(?:\/(\d+))?\b/g, to: (m, alpha) => alpha ? `text-[#070546]/${alpha}` : `text-[#070546]` },
  { from: /\btext-amber-900(?:\/(\d+))?\b/g, to: (m, alpha) => alpha ? `text-[#3D3B63]/${alpha}` : `text-[#3D3B63]` },
  { from: /\btext-amber-800(?:\/(\d+))?\b/g, to: (m, alpha) => alpha ? `text-[#3D3B63]/${alpha}` : `text-[#3D3B63]` },
  { from: /\btext-foreground(?:\/(\d+))?\b/g, to: (m, alpha) => alpha ? `text-[#070546]/${alpha}` : `text-[#070546]` },
  { from: /\btext-muted-foreground(?:\/(\d+))?\b/g, to: (m, alpha) => alpha ? `text-[#3D3B63]/${alpha}` : `text-[#3D3B63]` },
  
  { from: /\bbg-earthy-rust(?:\/(\d+))?\b/g, to: (m, alpha) => alpha ? `bg-[#9E8EB3]/${alpha}` : `bg-[#9E8EB3]` },
  { from: /\bbg-earthy-forest(?:\/(\d+))?\b/g, to: (m, alpha) => alpha ? `bg-[#3D3B63]/${alpha}` : `bg-[#3D3B63]` },
  { from: /\bbg-earthy-clay(?:\/(\d+))?\b/g, to: (m, alpha) => alpha ? `bg-[#D9D9D9]/${alpha}` : `bg-[#D9D9D9]` },
  { from: /\bbg-earthy-sun(?:\/(\d+))?\b/g, to: (m, alpha) => alpha ? `bg-[#E8E3F7]/${alpha}` : `bg-[#E8E3F7]` },
  { from: /\bbg-earthy-ochre(?:\/(\d+))?\b/g, to: (m, alpha) => alpha ? `bg-[#9E8EB3]/${alpha}` : `bg-[#9E8EB3]` },
  { from: /\bbg-amber-900(?:\/(\d+))?\b/g, to: (m, alpha) => alpha ? `bg-[#070546]/${alpha}` : `bg-[#070546]` },
  { from: /\bbg-amber-800(?:\/(\d+))?\b/g, to: (m, alpha) => alpha ? `bg-[#3D3B63]/${alpha}` : `bg-[#3D3B63]` },
  { from: /\bbg-sage(?:\/(\d+))?\b/g, to: (m, alpha) => alpha ? `bg-[#9E8EB3]/${alpha}` : `bg-[#9E8EB3]` },
  { from: /\bbg-fog(?:\/(\d+))?\b/g, to: (m, alpha) => alpha ? `bg-[#D9D9D9]/${alpha}` : `bg-[#D9D9D9]` },
  
  { from: /\bborder-amber-900(?:\/(\d+))?\b/g, to: (m, alpha) => alpha ? `border-[#070546]/${alpha}` : `border-[#070546]` },
  { from: /\bborder-amber-800(?:\/(\d+))?\b/g, to: (m, alpha) => alpha ? `border-[#3D3B63]/${alpha}` : `border-[#3D3B63]` },
  { from: /\bborder-earthy-forest(?:\/(\d+))?\b/g, to: (m, alpha) => alpha ? `border-[#9E8EB3]/${alpha}` : `border-[#9E8EB3]` }
];

const files = [
  ...walkSync(path.join(__dirname, 'src/pages')),
  ...walkSync(path.join(__dirname, 'src/components'))
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Use regexes
  regexes.forEach(rule => {
    content = content.replace(rule.from, rule.to);
  });
  
  // Use direct replacements
  Object.keys(map).forEach(key => {
    // Only replace whole words (for non-regex replacements)
    const regex = new RegExp(`\\b${key}\\b`, 'g');
    content = content.replace(regex, map[key]);
  });
  
  // Set main background for root divs (min-h-screen that lacks bg-)
  // Assuming basic `min-h-screen` gets the E8E3F7 background.
  content = content.replace(/"min-h-screen([^"]*)"/g, (match, classes) => {
    if (!classes.includes('bg-')) {
      return `"min-h-screen bg-[#E8E3F7] text-[#070546]${classes}"`;
    }
    return match;
  });

  fs.writeFileSync(file, content, 'utf8');
});

console.log('Re-theming complete!');
