const theSum = require("../sum")
// test(name, fn, timeout) its syntax
// it(name, fn, timeout) test alias
test("Returns The Summed Numbers", () => {
  expect(theSum()).toBe(0);
});

test("Returns The Number", () => {
  expect(theSum(10)).toBe(10);
});

test("Returns The Summed Numbers", () => {
  expect(theSum(15, 25)).toBe(40);
});

// 5th lesson
test("Returns The Summed Numbers with rest para", () => {
  expect(theSum(1, 9, 10, 40, 20, 10, 100, 10)).toBe(200);
});

console.log([].reduce((a,b)=> a + b, 0));