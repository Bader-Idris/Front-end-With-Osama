
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
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// 🔴npm i lodash🔴 => to install gibberish installing, when it's used:
// we'll have a new dir named node-modules which includes dependencies

// so package.json is tended to set macro-info about the project,
//  we need to check the property {"dependencies":{""}}