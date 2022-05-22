/**
 * @file Provide a minifier for the HTML.
 */

/** 
 * @typedef Options
 * @type {import('html-minifier-terser').Options}
*/

'use strict';

const fs = require('fs').promises;
const { minify } = require('html-minifier-terser');

/** @type {Options} */
const options = {
  removeAttributeQuotes: true,
  minifyCSS: true,
  minifyJS: true,
  collapseWhitespace: true,
  removeComments: true,
  removeEmptyElements: true,
};

/**
 * Minifies the index.html
 * @returns {Promise<void>}
 */
(async () => {
  process.stdout.write('\nMinifying HTML...\n');

  try {
    const raw = await fs.readFile('./dist/index.html', 'utf8');

    // Temp fix for Astro producing and adding debug styles
    const file = raw.replace(/<link rel="stylesheet".+link>/, '');
    await fs.rm('./dist/assets', { recursive: true });

    const data = await minify(file, options);

    await fs.writeFile('./dist/index.html', data);
    process.stdout.write('\nSuccess!\n\n');
  } catch {
    process.stdout.write('\nCheck your code.\n\n');
  }
})();
