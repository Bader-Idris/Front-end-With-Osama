const theFilter = require('../input');

describe('Validate Input Field', () => {
  test("Check If Name Is Empty", () => {
    expect(theFilter()).toBe('Unknown');
  });
  test("Check If Name Starts || Ends With Empty Spaces", () => {
    expect(theFilter(' Bader ')).toBe('Bader');
  });
});