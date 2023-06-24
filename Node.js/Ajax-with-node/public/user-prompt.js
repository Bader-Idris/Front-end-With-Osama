let div = document.querySelector('.prompt');
let button = document.querySelector('#prompt');

button.onclick = (e) => {
  // location.pathname = `/link`;
  loadDoc()
};

/*GET req
function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      div.innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "test.txt");
  xhttp.send();
}
*/

//? you need to set up a route to handle the POST req and parse req body
// post request
function loadDoc() {
  let nameAsking = window.prompt('Add your First and last name here', "john Doe");
  if (!nameAsking || nameAsking == "") nameAsking = "John Doe";
  const [fname, lname] = nameAsking.split(' ');
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    div.innerHTML = this.responseText;
  }
  xhttp.open("POST", "user_prompt");
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");//! crucial with POST
  xhttp.send(`fname=${fname}&lname=${lname}`);//! data will be sent to server
}
