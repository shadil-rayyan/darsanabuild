import fs from 'fs';
import path from 'path';

// Path to the _meta.json file
const metaPath = path.resolve(process.cwd(), 'docs/_meta.json');
const meta = JSON.parse(fs.readFileSync(metaPath, 'utf-8'));

export default {
  projectLink: 'https://github.com/yourusername/your-repo',
  docsRepositoryBase:
    'https://github.com/yourusername/your-repo/blob/main/docs',
  titleSuffix: ' – CMNS & Scholarship Management System',
  logo: meta.title, // Use title from _meta.json
  search: true,
  darkMode: true,
  footer: true,
  footerText: `MIT ${new Date().getFullYear()} © Your Company.`,
  footerEditLink: 'Edit this page on GitHub',
  sidebar: {
    defaultMenuCollapseLevel: 1,
    titleComponent({ title }) {
      return title; // Return title as plain text
    },
    items: meta.sidebar, // Load sidebar items from _meta.json
  },
};
