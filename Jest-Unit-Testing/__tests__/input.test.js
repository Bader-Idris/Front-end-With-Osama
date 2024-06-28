const theFilter = require('../input');

describe('Validate Input Field', () => {
  test("Check If Name Is Empty", () => {
    expect(theFilter()).toBe('Unknown');
  });
  test("Check If Name Starts || Ends With Empty Spaces", () => {
    expect(theFilter(' Bader ')).toBe('Bader');// if we remove 1st or -1 space it'll pass though
  });
  test("Check If Name Has +10 Letters", () => {
    expect(theFilter('Osama_Mohamed_Elsayed')).toBe('Osama_Moha');// if we remove 1st or -1 space it'll pass though
  });
});