function sayHello(theName, theGender) {
  // Your Code Here
  typeof theName == "string";
  if(theGender === "Male") console.log(`Hello Mr ${theName}`);
  else if (theGender ===  "Female")console.log(`Hello Miss ${theName}`);
  else if(theGender == null) console.log(`Hello ${theName}`);
}
// If you wanna output only the first console.log, use return
function sayHello(theName, theGender) {
  // Your Code Here
  typeof theName == "string";
  if(theGender === "Male") return `Hello Mr ${theName}`;
  else if (theGender ===  "Female") return`Hello Miss ${theName}`;
  else if(theGender == null) return`Hello ${theName}`;
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
// 1st Assignment✅

function calculate(firstNum, secondNum, operation) {
  if(secondNum == null && operation == null) return `Second Number Not Found`;
  else if(operation == null || operation === 'add') return firstNum + secondNum;
  else if(operation === 'subtract') return firstNum - secondNum;
  else if(operation === 'multiply') return firstNum * secondNum;
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600
// 2nd Assignment✅

function ageInTime(theAge) {
  months = theAge * 365.25 / 12;
  if (theAge < 100 && theAge > 10)console.log(`Your Age ${theAge} In Years Is ${theAge * 365.25}\nIn Months is ${months}`)
  else return `Age Is Out Of Range`;
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
// 3rd Assignment✅

function checkStatus(a, b, c) {
  if(typeof a == 'string' && typeof b == 'number'){
    if (c == true) return `Hello ${a}, Your Age Is ${b}, You Are Available For Hire`;
    else return `Hello ${a}, Your Age Is ${b}, You Are Not Available For Hire`;
  }
  if(typeof b == 'string' && typeof a == 'number'){
    if (c == true) return `Hello ${b}, Your Age Is ${a}, You Are Available For Hire`;
    else return `Hello ${b}, Your Age Is ${a}, You Are Not Available For Hire`;
  }

  if (typeof a == 'boolean') {
    if (a == true){
      if (typeof b == 'string' && typeof c == 'number') {
        return `Hello ${b}, Your Age Is ${c}, You Are Available For Hire`;
      }
      else if (typeof c == 'string' && typeof b == 'number') {
        return `Hello ${c}, Your Age Is ${b}, You Are Available For Hire`;
      }
    } else{
      if (typeof b == 'string' && typeof c == 'number') {
        return `Hello ${b}, Your Age Is ${c}, You Are Not Available For Hire`;
      }
      else if (typeof c == 'string' && typeof b == 'number') {
        return `Hello ${c}, Your Age Is ${b}, You Are Not Available For Hire`;
      }
    }
  }
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
// 4th Assignment [A Challenge]✅

// Creating a function to append selectBox With Help Of ChatGpt AI
function createAnElement(tagName, textContent) {
  let element = document.createElement(tagName);
  let textNode = document.createTextNode(textContent);
  element.appendChild(textNode);
  return element;
}
// let div = createAnElement("div", "Hello niggas");
// document.body.appendChild(div);
// 

function createSelectBox(startYear, endYear) {
  let sele = document.createElement("select");
  let opt = document.createElement("option");
  let myText = document.createTextNode("Date");
  opt.appendChild(myText);
  document.body.appendChild(sele);
  opt.setAttribute("value", "date");
  // console.log(opt.getAttribute("class"));
  opt.getAttribute("value");

  for (let i = 0; i < endYear; i++) {
  
  }
}


function createSelectBox(startYear, endYear) {
  let sele = document.createElement("select");
  let opt = document.createElement("option");
  // opt.setAttribute("value",startYear);
  let myText = document.createTextNode(startYear);
  for (let i = startYear; i <= endYear; i++) {
    opt.appendChild(myText);
    // opt.setAttribute("value",startYear);
    // opt.getAttribute("value").cloneNode(true);
    console.log(opt.getAttribute("value"));
  startYear++;
  }
  document.body.appendChild(sele);
}
createSelectBox(2000, 2021);



function createSelectBox(startYear, endYear) {
  let sele = document.createElement("select");
  let opt = document.createElement("option").cloneNode(true);
  let myText = document.createTextNode(startYear);
  for (let i = startYear; i <= endYear; i++) {
    opt.setAttribute("value",startYear);
    opt.appendChild(myText);
    // sele.appendChild(opt);//check it
    opt.getAttribute("value");
    // console.log(opt.getAttribute("value"));
    console.log(sele.appendChild(opt));//check it
  startYear++;
  }
  document.body.appendChild(sele);
}//its problems are 🔴value as endYear, text as startYear🔴


function createSelectBox(startYear, endYear) {
  let sele = document.createElement("select");
  let opt = document.createElement("option").cloneNode(true);
  let myText = document.createTextNode(startYear).cloneNode(true);
  for (let i = startYear; i <= endYear; i++) {
    opt.setAttribute("value",i);
    opt.appendChild(myText);
    // sele.appendChild(opt);//check it
    opt.getAttribute("value");
    // console.log(opt.getAttribute("value"));
    console.log(sele.appendChild(opt));//check it
  i++;
  }
  document.body.appendChild(sele);
}

createSelectBox(2000, 2021);

/* Output Must Be:
<select>
  <option value="2000">2000</option>
  <option value="2001">2001</option>
  <option value="2002">2002</option>
  <option value="2003">2003</option>
  <option value="2004">2004</option>
  <option value="2005">2005</option>
  <option value="2006">2006</option>
  <option value="2007">2007</option>
  <option value="2008">2008</option>
  <option value="2009">2009</option>
  <option value="2010">2010</option>
  <option value="2011">2011</option>
  <option value="2012">2012</option>
  <option value="2013">2013</option>
  <option value="2014">2014</option>
  <option value="2015">2015</option>
  <option value="2016">2016</option>
  <option value="2017">2017</option>
  <option value="2018">2018</option>
  <option value="2019">2019</option>
  <option value="2020">2020</option>
  <option value="2021">2021</option>
</select>
*/
// 5th Assignment ❎

function multiply (...param) {
  if (typeof param == "number") {
    param * param;
    if (typeof param == "string") continue;
  };

}

function calc(...numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] * numbers[i+1]
    result += numbers[i] ;
  }
  return `Final Result: ${result}`;
}
console.log(calc(10, 20, 10, 30, 50));
/*
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
*/

// 6th Assignment ❎