const userPlan = document.querySelector('.top-container .button');
const planHeader = document.querySelectorAll('.plan h2')
userPlan.onclick = ((e)=> {
  e.target.classList.toggle('clicked');
  planHeader.forEach((h2)=>{
    if (h2.parentElement.classList.contains('basic')){
      console.log(`basic bro${h2.parentElement}`);
    }
    if (h2.parentElement.classList.contains('pro')){
      console.log(`pro bro${h2.parentElement}`);
    }
    if (h2.parentElement.classList.contains('master')){
      console.log(`master bro${h2.innerHTML}`);
    }
  });
});