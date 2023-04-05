// here we import it from say.js file
const say = require('../say');//require('./say'); before moving into __tests__ dir

// here we test imported func [unit]
test("Say Jest Message", () => {// firstly we named it
  // then this function is what we expect from this function, as you saw in exercism
  expect(say()).toBe("Hello Jest");
});
//  we need to see a ✅ before test function, that comes from the extension jest
// if not installed, use npm test in vsc terminal
// adding [--watchAll] to scripts obj then test property will make files changes being watched automatically

// I have a problem with VS Code, not seeing results, but IDE VS works well!

// 2nd scenario is mkdir __tests__