
function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    let nigga = zName.split(" ");
    if (nigga.length == 2) {
      return nigga[0] +" "+ nigga[1][0].toUpperCase() + "." ;
    }
    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.
  };//✅
  function ageWithMessage(zAge) {
    let elAge = zAge.split(" ");
    for (let i = 0; i < elAge.length; i++) {
      if(!isNaN(elAge[i]) && elAge[i] != 0) {
        return `Your Age Is ${elAge[i]}`;
      } else continue
    };
    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32
  };//✅
  function countryTwoLetters(zCountry) {
    return (zCountry[0] + zCountry[1]).toUpperCase();
    // Egypt => You Live In EG
    // Syria => You Live In SY
  };
  function fullDetails() {
    // Write Your Code Here
    return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, You Live In ${countryTwoLetters(zCountry)}`;
  };//✅
  return fullDetails(); // Do Not Edit This
};
console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

// 1st Assignment ✅ toke 3 days to fix all of its bugs, although some functions need improvements,
//  they're too basic and raw. I failed using for to pick two indexes, so I used a stupid method,
//  picking each on its own. And That's A Disaster In Programming☠️🤬
// ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅

// ⚠️🔴Turn both functions into arrow syntax🔴⚠️
// 1st func🔽
function itsMe() {
  return `Iam A Normal Function`;
}
//************************✅
let itsMe = () => {`Iam A Normal Function`};
// let itsMe = _ => {`Iam A Normal Function`};// in [GO] and other langs, not JS
console.log(itsMe()); // Iam A Normal Function✅

// 2nd func🔽

function urlCreate(protocol, web, tld) {
  return `${protocol}://www.${web}.${tld}`;
}

//************************✅
let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org✅


//🟢personal notes: arrows are called [lambda] || [fat Arrow] in some other langs🟢
// from main Course 66th lesson

// 2nd Assignment 💤✅


// Turn this complex function into an arrow one
function checker(zName) {
  return function (status) {
    return function (salary) {
      return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
    };
  };
}

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble
// [[read More About ⚠️Currying Function Technique⚠️]]
// 3rd Assignment [A Challenge]💤✅🔼 