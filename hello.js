
var fs = require('fs');
var fsExtra = require('fs-extra');
var chalk = require('chalk');

console.log(chalk.red("Привет"));

var l = "123456";
console.log(chalk.green(l.length * 45));

var h = fs.readFileSync('index.html', {encoding: 'utf8'});

h = h.replace('Document', 'Документ');

fs.writeFileSync('index.html', h);

console.log(h);