

function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {//will be 2 strings
    // split the name and return the first string normally and 2nd's only first letter as capital
    zName.split(" ") 
    for (let i = 0; i < zName.length; i++) {
      zName.split(" ")[i]
      if (zName[i] == 1) console.log(zName[i])
    }
    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.
  }
  function ageWithMessage(zAge) {
    // if 1st typed return 2nd one, or reverse 

    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32
  }
  function countryTwoLetters(zCountry) {
    // return first 2 letters as capital

    // Egypt => You Live In EG
    // Syria => You Live In SY
  }
  function fullDetails() {
    // Write Your Code Here
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

// 1st Assignment 💤✅

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
