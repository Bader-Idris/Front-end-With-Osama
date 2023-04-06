const theSum = require("../sum")
// test(name, fn, timeout) its syntax
// it(name, fn, timeout) test alias
test("Returns The Number", () => {
  expect(theSum(10)).toBe(10);
});

test("Returns The Summed Numbers", () => {
  expect(theSum(15, 25)).toBe(40);
});

test("Returns The Summed Numbers", () => {
  expect(theSum()).toBe(0);
});