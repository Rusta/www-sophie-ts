const fs = require('fs-extra');

console.log('Copying from "img" to "pages" directory');
fs.copySync('./img', './pages/img');
