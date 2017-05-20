const fs = require('fs-extra');

console.log('Copying from "img" to "public" directory');
fs.copySync('./img', './public/img');
