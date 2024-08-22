const path = require('path');

module.exports = {
  ci: {
    collect: {
      staticDistDir: './public', // Adjust this if your built files are in a different directory
      url: [
        'http://localhost/',
        'http://localhost/articles/',
        'http://localhost/code-projects/',
      ],
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.9 }],
        'categories:accessibility': ['warn', { minScore: 0.9 }],
        'categories:best-practices': ['warn', { minScore: 0.9 }],
        'categories:seo': ['warn', { minScore: 0.9 }],
      },
    },
    upload: {
      target: 'filesystem',
      outputDir: path.resolve(__dirname, 'public/lighthouse-reports'),
    },
  },
};
