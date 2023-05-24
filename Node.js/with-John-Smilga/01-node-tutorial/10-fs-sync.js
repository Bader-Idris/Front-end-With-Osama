const { readFileSync, writeFileSync } = require('fs')
// same as:🔽2️⃣ lines
// const fs = require('fs');
// fs.readFileSync
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

// fs.existsSync()// to check for fs directory

writeFileSync(//it overrides it by default, 🔴Important🔴
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' }//this flag makes it not override it🔴Important🔴
)
console.log('done with this task')
console.log('starting the next one')
