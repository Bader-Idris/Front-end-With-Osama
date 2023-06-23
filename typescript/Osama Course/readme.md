# WHAT IS TYPESCRIPT ?

- TypeScript Is A Strongly Typed Programming Language That Builds On JavaScript
- TypeScript Developed And Maintained By Microsoft
- TypeScript Is JavaScript With Types
- Typescript Add Features To JavaScript Without Changing It

---

## WHY WE NEED TYPESCRIPT ?

- Detect Errors Without Running The Code "Static Type Checking"
- Analyze The Code As You Type
- Save Some Unit Tests As The Error Show While Writing
- Every JS File Is Valid TS File
- Will Help You When You Write React, Vue, Angular Apps
- Gives You The Missing Features In JS Like "Interfaces, Generics, Decorators"

---

## HOW TYPESCRIPT WORKS ?

- TypeScript Compiler Compile TS Code Into JavaScript Code "This's Called Transpilation"
- How About The New Features? Workaround

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
- 