const theSum = require("../sum")
// test(name, fn, timeout) its syntax
// it(name, fn, timeout) test alias

describe("checking Sum Of Numbers", () => {// 6th lesson Describe; concatenating all prior lessons inside it
  // test(name, fn, timeout); this is called test block
  // describe(name, fn); we can use it to align functions as its sections
  // we can nest describe, as other methods
  describe('checking if input is null or one only parameter', () => {
    // this is a nested describe
    test("Returns The Summed Numbers", () => {
      expect(theSum()).toBe(0);
    });

    test("Returns The Number", () => {
      expect(theSum(10)).toBe(10);
    });
  })

  test("Returns The Summed Numbers", () => {
    expect(theSum(15, 25)).toBe(40);
  });

  // 5th lesson
  test("Returns The Summed Numbers with rest para", () => {
    expect(theSum(1, 9, 10, 40, 20, 10, 100, 10)).toBe(200);
  });

  console.log([].reduce((a,b)=> a + b, 0));
});