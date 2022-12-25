let myAdmins = ["Ahmed","Osama","Sayed","Stop","Samera"]
let myEmployees = ["Amgad","Samah","Ameer","Omar","Othman","Amany","Samia"]
document.write(`<div>We Have X Admins</div>`);
/*
we have to create | <div>We Have X Admins</div>
then under it, the number of admins, in a div[dynamically]
then force the array to stop when sees [stop] string, as stop/samera
we use if condition for it!
then Create <hr>, and separate each team with making the members starting with same letter
as For Ahmed admin, Amgad/Ameer employees, For Osama give Omar and othman
with hr after each set ... <div>The Admin for Team [n] is ${admin}</div>
  h3 team members: 
  <p> 1 amgad</p> etc [n] ${Employee}
*/
let AdminNo = myAdmins.length
document.write(`<div>We Have X Admins</div>`);

if () {
  console.log(myAdmins);
}
while (myAdmins.includes("Stop")) {
  // Hell No
  break;
}