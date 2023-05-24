// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log(__dirname)
setInterval(() => {
  console.log('hello world')
}, 1000)
// we can console.log any of them, they're not all globals, but most common
// To Stop Code we type: Ctrl+C
// we can overlook extension, when executing, as: node app