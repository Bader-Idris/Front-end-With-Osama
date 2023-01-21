/*
  This helps if you get yourself stock in the mud

switch (varName) {
  case "afshin":
  case "saeed":
  case "larry":
    alert("Hey");
    break;

  default:
    alert("Default case");
}

*/


let day = "   friday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday ✅
let myDay = day.trim().charAt(0).toUpperCase() + myDay.slice(1);

let day = "Friday";
let day = "Saturday";
let day = "Sunday";
// Output => "No Appointments Available"

let day = "Monday";
let day = "Thursday";
// Output => "From 10:00 AM To 5:00 PM"

let day = "Tuesday";
// Output => "From 10:00 AM To 6:00 PM"

let day = "Wednesday";
// Output => "From 10:00 AM To 7:00 PM"

let day = "World";
// Output => "Its Not A Valid Day"

switch (day) {
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("No Appointments Available");
    break;
  case "Monday":
  case "Thursday":
    console.log("From 10:00 AM To 5:00 PM");
    break;
  case "Tuesday":
    console.log("From 10:00 AM To 6:00 PM");
    break;
  case "Wednesday":
    console.log("From 10:00 AM To 7:00 PM");
    break;
  default:
    console.log("Its Not A Valid Day");
    alert("I love alerts🤪");
}
//✅, but I don't know if the first variable with spaces must be inside this switch statement, for better practices
//  user must not be able to append spaces in that field🤪🙃