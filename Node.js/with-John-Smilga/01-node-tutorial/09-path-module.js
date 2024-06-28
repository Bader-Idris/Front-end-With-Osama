const path = require('path')

console.log(path.sep)//our path separator [/] or [\] depending on OS
// my Windows is slash, ISO are back slash, and Linux

const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)
