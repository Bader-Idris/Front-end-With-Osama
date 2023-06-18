/*
You need to write regex that will validate a password to make sure it meets the following criteria:

  At least six characters long
  contains a lowercase letter
  contains an uppercase letter
  contains a digit
  only contains alphanumeric characters (note that '_' is not alphanumeric)
*/
//! it's important to know boundary ch in regExp to solve this, /\b\d{3}\b/
//? that means only three digits, it's awesome for this challenge,
//! and I consider it's the reason I wasn't able to solve it previously
// \b[A-Z]\w*\b matches any word that starts with a capital letter, as Apple
// and doesn't accept apple, starting with lowerCase ch

// assign your RegExp to REGEXP
// const REGEXP = /\w({6}A-Za-z\d^[0-9])/g;
// const REGEXP = /(\w?[^0-9]){6}/;
const REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;

let serials = "4fdg5Fj3 djI38D55 fjd3IR9";
console.log(serials.match(REGEXP));
// doTest('fjd3IR9', true);
// doTest('ghdfj32', false);
// doTest('DSJKHD23', false);
// doTest('dsF43', false);
// doTest('4fdg5Fj3', true);
// doTest('DHSJdhjsU', false);
// doTest('fjd3IR9.;', false);
// doTest('fjd3  IR9', false);
// doTest('djI38D55', true);
// doTest('djI3_8D55', false);
// doTest('djI38D55@@', false);