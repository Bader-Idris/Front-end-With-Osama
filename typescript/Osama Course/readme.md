# WHAT IS TYPESCRIPT ?

- TypeScript Is A Strongly Typed Programming Language That Builds On JavaScript
- TypeScript Developed And Maintained By Microsoft
- TypeScript Is JavaScript With Types
- Typescript Add Features To JavaScript Without Changing It

---

## WHY WE NEED TYPESCRIPT ?

- Detect Errors Without Running The Code `Static Type Checking`
- Analyze The Code As You Type
- Save Some Unit Tests As The Error Show While Writing
- Every JS File Is Valid TS File
- Will Help You When You Write React, Vue, Angular Apps
- Gives You The Missing Features In JS Like `Interfaces, Generics, Decorators`

---

## HOW TYPESCRIPT WORKS ?

- TypeScript Compiler Compile TS Code Into JavaScript Code `This's Called Transpilation`
- How About The New Features? `Workaround`

---

## Requirements

- **JavaScript Concepts**

- Variables
- Arrays
- Objects
- Functions
- Conditions

---

---

## How to run Ts in your machine?

- `nodejs` is required
- then install its package by: `npm i typescript`, if globally add `-g` as `npm i -g blab`
- then check if it's installed in the project as: `tsc -v`

[Check its website](https://www.typescriptlang.org/)

- You can check installing it in the project [here](https://www.typescriptlang.org/download)

- `npm install typescript --save-dev` for projects

---

- **🔴 Compile Ts Files 🔴**
- to compile 'em use: `tsc fileName.ts`
- `tsc -h` to get help information
- `tsc -w` is to watch migrating ts to js files, which is awesome, even if you delete the `dist` folder where you put every compiled js from TS, it'll re-create it when enabling watch mode
- 🔴 we can remove comments in js migrated files
- to install typescript configuration use: `tsc --init`

#### inside tsconfig.json

- `target` it targets es2016 you can change it to `2020 one`
- an  example of `dist` DIR is [scss](https://github.com/twbs/bootstrap) it compiles scss to css
- so you put the ts in `src` DIR, and make it compile into `dist` DIR, stands for `distribution`
- `rootDir` is to set our src DIR, for TS files to be compiled
- `outDir` is where compiled as JS files go, even if not exists, it creates it
- `removeComments` removes comments as its name, in some projects, comments `are bad code`
- `sourceMap` is for debugging, Osama will explain more in future
- when you type: `tsc` it **runs** tsconfig
- when watch, it does its job on saving, as nodemon do with node

---

## Statically Typed Language Like [Rust, C, C++]

- Variables Types Are Static, , Once You Declare
- Type Of A Variable Is Known At Compile Time
- Have Better Performance At Run-Time Due To
- Error Detected Earlier
- It You Cannot Change
- `Do Type Checking At Compile-Time`
- Not Needing To Check Types Dynamically

## Dynamically Typed Language Like [PHP, Python, JavaScript]

- Variables Types Are Dynamic, You Can Always Change It
- `Type Checking At Execution-Time`
- Error Can Be Detected After Execution

- side note: python does not combine int and str types when printing

### 05- Type Annotations And Any Data Type

- **Type Annotations || Signature** في اللغات الأخرى

  - - Indicates The Data Type Of variables
  - - Indicates The Data Type Of Functions Input/Output
  - - Objects, etc.

  - - Why Do We Use It?
  - - Is It Mandatory?
  - - What Happens If We Didn't Use It?

---

```typescript
// three types of variables, Var: data type, value
let theName: string = "Elzero";//s != S
let theAge: number = 40;
let hire: boolean = true;
// as static typed langs, can't assign int to str
```

- We do this action of setting data type to force var to its type
- it's optional, not mandatory
- - **what to do with unknown values?**
- we use 1st ts data type: `any`

```typescript
let all: any = "little String";//even null as let all any;
all = 100;// accepts it
```

- see this js func

```javascript
const add = (n1, n2) => n1 + n2;
console.log(add(10, 20));//normal number
console.log(add(10, "20"));//functionality destroyed
// it'll concatinate it
// even setting param as Number doesn't work, only inside it
```

- so we make it as 🔽 in tsc

```typescript
function add(n1: number, n2: number ) { n1 + n2};
console.log(add(10, 20));
console.log(add(10, "20"));// string is an error it'll response
```

### 06- Type Annotations With Arrays

- we can use regExp approach of `if or` with data anatotation as 

```typescript
let all: (string | number | boolean) = 'first value';// () => allowed
all = "hello";
all = 100;
all = true;
```

- when you add strings to array, it'll return string[], use this: 

```typescript
let myParts = ["hand", "leg", "head", "whatnot", 10]
// when you add numbers to it it'll become (string | number)
```

- let's add a for loop with some bugs

```typescript
// check index.ts file
for (let i = 0; i < myParts.length; i++) {
  console.log(myParts[i].repeat(3)); // bug because only works with string
  // you can fix the number | add string[] as we did
}
```

### 07 - Type Annotations With Multidimensional Arrays

- it's simple logic and easily perceived

```ts
let arrayFour: (string| number| (number|string)[] | boolean[])[] = [ 1, 2, "A", "B", [ 3, 4,"C","D"], [true, false]];
```

### 08 - Type Annotations With Function

- removeMe