// This script is required until the following PR gets accepted:
// https://github.com/gatsbyjs/gatsby/pull/1176

const fs = require('fs-extra');

console.log('Copying from "img" to "public" directory');
fs.copySync('./img', './public/img');
