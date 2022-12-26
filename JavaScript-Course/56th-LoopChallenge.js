let myAdmins = ["Ahmed","Osama","Sayed","Stop","Samera"]
let myEmployees = ["Amgad","Samah","Ameer","Omar","Othman","Amany","Samia"]
/*
separate each team with making the employees start with same letter
as For Ahmed admin, Amgad/Ameer employees, For Osama give Omar and othman
with hr after each set ... <div>The Admin for Team [n] is ${admin}</div>
  h3 team members: 
  <p> 1 amgad</p> etc [n] ${Employee}
  */
let AdminNo = myAdmins.length
let num = 0


document.write(`<div>We Have X Admins</div>`);

for (; num < myAdmins.length; num++) {
  if ( num === myAdmins.indexOf("Stop")) {
    document.write(`<div>We Have ${num} Admins</div>`);
    break;
  }
}

for (let i = 0; i < AdminNo; i++) {
  document.write(`<div>`);
  if ( i === myAdmins.indexOf("Stop")) {
    break;
  }
  document.write(`<hr>`);
  document.write(`<div>The Admin For Team ${i + 1} Is ${myAdmins[i]}</div>`);
  document.write(`<h3>Team Members: </h3>`);

  for (let j = 0; j < myEmployees.length; j++) {
    myEmployees.sort();
    document.write(`<p>- ${j +1} ${myEmployees[j]}</p>`);
    myEmployees.sort
    // if (myEmployees.startsWith("A", j)) {
    //   document.write(`<p>- ${j +1} ${myEmployees[j]}</p>`);
    // }🙃🤔 I tacked sorting strings alphabetically, so A, O, S are separated to each Admin set!!
  }
  document.write(`</div>`);
}