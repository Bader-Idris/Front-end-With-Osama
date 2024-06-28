
// john said NPM [node package manager] is the world's biggest code store
// we can get image slider from npm store easily, because many other users struggled creating it previously...

// NPM enables us do these:
/*
  01- re-use our own code in other projects
  02- use code written-by other developers
  03- share our own solutions with other developers
*/
// its site is: https://npmjs.com
// packages are modules of Javascript coded,
//   other names to same thing are: modules, dependencies
// notice: there ain't no quality control in npm, [ANYONE CAN PUBLISH ANYTHING]

// there's a lovely weekly download indicator, to see security and usefulness


// -------------------------------------------------
// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName> //! means global
// sudo install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// 🔴npm i lodash🔴 => to install gibberish installing, when it's used:
// we'll have a new dir named node-modules which includes dependencies

// so package.json is tended to set macro-info about the project,
//  we need to check the property {"dependencies":{""}} inside [package.json]
const _ = require('lodash');// see 35 above, you can type install instead of i in middle

const items = [1, [2,[3,[4]]]];
const newItems = _.flattenDeep(items);// in js we use flat or flatMap
console.log(newItems);

// having package.json is so crucial, John said
//  especially when sharing our project with others

/* we create a gitignore module and then type:
  /node_module

  that means, git! ignore this module as for [/] symbol
  then its name ...

  a good question:
  how git users will be able to use require('lodash') since we ignored its module?
  🔴 the magic happens here 🔴
  if user installed npm, and run `npm install`
  the package.json which includes [[dependencies]] will retrieve tended files

  John said: look at my react projects, I did the same with large directories
  so I put them in package.json => dependencies
  🔼⚠️🔴 CRUCIAL 🔴⚠️🔼

  now, we're familiar with package.json and npm install command

  we can install it as a simple dependency:
  dev dependencies are as typed as: npm i nodemon -D [or --save-dev]
*/

/* let's look at "scripts" key now
  instead of running [node app.js] we can set it inside the package.json
  as "start":"node app.js",
  so when we command `npm start` //! same functionality 

  some commands are invalid when typing: node start, so we use: 🔼
  npm run nameOfCommand,

  */
// we set dev command, so to invoke it //! we type: npm run dev

/**
 * * uninstalling the package
 * !
 * ? npm uninstall packageName
 * TODO:
 * // as npm uninstall bootstrap
 * * the new clearer approach is
 * ? deleting both required modules and package-lock.json 
 * ? => we access package.json dependencies TO delete bootstrap as eg
 * ? => we run code: //! npm install
 * * globally, we use above as code: //! npm install -g nodemon
 * ? installing it globally was in OS terminal, he used ISO, so used //! sudo
 * ! John talked a bit about gatsby.js framework
 * * before npx was arrived, we were compiled to install outsources globally
 * ! He said, some students struggle using global -g, so try avoiding as you can
 * ? 2 approaches are preferred: //! locally || npx
 * ! npx stands for package runner[officially], and commonly as: execute
 * 
 * * the importance of dependencies is that we catch our version,
 * * so when others install our version, we'll reduce no bugs
 * ! jQuery is an example
 * 
 * ? to learn more about package.json //! John said see this post:
 * ! https://nodesource.com/blog/the-basics-of-package-json-in-node-js-and-npm/
 * 
 * ? before accessing //! EXPRESS.js
 * * learn more about these node topics to cover: [first two are in Elzero channel]
 * ! Event loop
 * ! async patterns
 * ! events emitter and streams
 * ? some John's explanation: https://www.course-api.com/
*/

// ! ------------------------------------------------
// const { readFile } = require('fs')
// readFile('./content/first.txt', 'utf8', (err, result) => {
//   if (err) return
//   else {
//     console.log(result)
//   }
// })
// this works well when only bringing data from one source, but how about 2 modules?  //! and write one
// ? it'll output bugs
// ! the better solution is to use promises

const { readFile , writeFile} = require('fs')//! we wanna write so not only readFile
// ! a cool module method which is called util
const util = require('util').Promises

// !-**---**---**---**---**---**---**---**---**---**---**---
// const util = require('util');
// const readFilePromise = util.promisify(readFile);//? instead of getText func
// const writeFilePromise = util.promisify(writeFile);//! there's a better way than promisify
// ? which is by removing the promise from writeFilePromise and readFilePromise down there
// !-**---**---**---**---**---**---**---**---**---**---**---
const getText = (path) => {//'./content/first.txt'
  return new Promise((resolve, reject) => {
    readFile(path, 'utf8', (err, data) => {
      if (err) reject(err)
      else {
        resolve(data)
      }
    })
  });
}
// !--------------------------End of getTextFunc------------------------------
// getText('./content/first.txt')
//   .then(result => console.log(result))
//   .catch((err) => {});

// ? using async patterns instead of promises
// const start = async() => {
//   const first = await getText('./content/first.txt')
// };
// start()
// ! we have to rap it in a try-catch block
const start = async() => {
  try {
    // const first = await getText('./content/first.txt')//! instead of getText func, we use new util one
    // const second = await getText('./content/second.txt')// this is cleaner than 11th's lesson
    // const first = await readFilePromise('./content/first.txt', 'utf-8')//! we still add encoding here
    // const second = await readFilePromise('./content/second.txt', 'utf-8')
    const first = await readFile('./content/first.txt', 'utf-8')//! we still add encoding here
    const second = await readFile('./content/second.txt', 'utf-8')
    //! here we don't use a variable  calling writeFilePromise
    await writeFilePromise('./content/result-mind-grenade.txt',
      `THIS IS AWESOME[AND HARD🤪]:${first} ${second}`)//! if module's not existing, it creates it
    console.log(first, second)
  } catch (err) {
    // new Error(err)
    console.log(err)
  }
};
start()