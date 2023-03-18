
let addClass = document.querySelector('input.classes-to-add');
let removeClass = document.querySelector('input.classes-to-remove');
let appendedToDiv = document.querySelector('.classes-list > div');

window.onload = (()=>{
  addClass.focus();
})
addClass.addEventListener('blur', function (e) {
  this.value.split(' ').map((e)=>{
    if (e !== "" || e != 0) {
      let createdDiv = document.createElement('div');
      createdDiv.addClass(e);
      // let divContent = e;
      // createdDiv.appendChild(divContent);
    }
    // e !== "" || e != 0 ? console.log(e) : false;
  });
  document.body.appendChild(createdDiv);// a lot of craziness bro, continue tomorrow
},);

removeClass.addEventListener('blur', function (e) {
  this.value.split(' ').map((e)=>{
    // if (e !== "" || e != 0) {
    //   console.log(e);//try it
    // }
    e !== "" || e != 0 ? console.log(e) : false;
  });
},);


// we'll need to use those events 
/*
  Class List Object && Methods
  - classList
  --- length
  --- contains
  --- item(index)
  --- add [%100 will be used⬇️3️⃣]
  --- remove
  --- toggle
*/
/*
<div class="assign">
  <input type="text" class="classes-to-add" placeholder="Add Classes" />
  <input type="text" class="classes-to-remove" placeholder="Remove Classes" />
  <div class="element current" title="Current">Current Element</div>
  <div class="classes-list">
    <h5>Current Element Class Lists</h5>
    <div></div>
  </div>
</div>
*/



// addClass.addEventListener({
//   onblur: (e)=> {
//     console.log('my baby Hanady');
//   },
//   onfocus:e => {
//     console.log('nigga')
//   }
// })



// LaElemento.onclick = function () {
//   LaElemento.classList.add("add-one", "add-two"); //can add many classes[tokens]
//   LaElemento.classList.remove("one", "two"); //removes existing classes,
//   //  if one doesn't exist, it doesn't care, and remove the existing one
//   LaElemento.classList.toggle("one"); // only one class, if exists, it'll remove it, if not it'll create it
//   // we can use it when moving [active] between elements
// };



