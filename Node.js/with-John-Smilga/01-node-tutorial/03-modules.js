// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./04-names')//crucial to start requiring with ./ if in same dir
const sayHi = require('./05-utils')
const data = require('./06-alternative-flavor')
require('./07-mind-grenade')// here we invoke entire module,
//  after it's done that in its module via calling created function inside
sayHi('susan')
// console.log(data)
sayHi(names.john)
sayHi(names.peter)
// sayHi(["john"]) we can call both as this, as Osama taught me
// sayHi(["peter"])// 2nd approach is to call both as destructuring object, {john, peter} above


// separated in 04-names and 05, this practice is better than having one only file/module
// because big projects will have craziness if built-in one only module
