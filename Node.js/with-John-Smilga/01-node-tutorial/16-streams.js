const { createReadStream } = require('fs')//! how to create a stream

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })
const stream = createReadStream('./content/big.txt')

stream.on('data', (result) => {
  console.log(result)
})
stream.on('error', (err) => console.log(err))

//? this function is the solution for not rw files repeatedly,
//? especially when they get bit data, see && run 15  as the big file
//! it's preferred to see node.js class:fs.ReadStream method
//! go to nodejs.org then events api ... for current -v see:
// ? https://nodejs.org/dist/latest-v18.x/docs/api/fs.html#class-fsreadstream