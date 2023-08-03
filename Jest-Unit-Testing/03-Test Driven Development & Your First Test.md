Testing Rules
[1] Get The Function To Test
[2] Give Input To The Function
[3] Define What Is The Output
[4] Check For The Output

TDD => Test Driven Development [`we'll see it frequently 🔽 3 are TDD`]

[1] Think About What Your Code Will Do
[2] Write The Code
[3] Test The Code

#### we created a module `file` named `say.js`, inside it we export methods

```
function sayHello() {
  return `Hello Jest`;
}
module.exports = sayHello;
```

#### , then import in our test project file

###### when Osama typed npm test in vsc terminal, he got testMatch, said it's for file searching

### in frameworks as react or its competitors vue, etc, the `application` determines what structure you're building, some frameworks prefer adding files in same directory, some others prefer separating 'em, and making `testing directory`

### we create a testing dir for our function as [`say.test.js`], after creating both say and say.test files, that means both are chained together, `import sayHello in it` go see [`say.test.js`] file. [`IMPORTANT`]

###### done in 4:26 PM 4/5/2023
