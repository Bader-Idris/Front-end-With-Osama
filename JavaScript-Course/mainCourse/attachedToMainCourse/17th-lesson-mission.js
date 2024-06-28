/*
let titleBro = "Hello " + "Elzero";//we can use `Hello Elzero` 
let descriptionYo = "Elzero Web School";
let dateYo = "25/10";
let markUp = `
  <div class="card">
    <h3>${titleBro}</h3>
    <p>${descriptionYo}</p>
    <span>${dateYo}</span>
  </div>
`;
let result = markUp.repeat(4);
document.write(result);
*/

// It was not 100% correct, this is the right one

let titleBro ="Elzero", descriptionYo = "Elzero Web School", dateYo = "25/10";
let markUp = `
  <div class="card">
    <h3>Hello ${titleBro}</h3>
    <p>${descriptionYo}</p>
    <span>${dateYo}</span>
  </div>
`;
let result = markUp.repeat(4);
document.write(result);