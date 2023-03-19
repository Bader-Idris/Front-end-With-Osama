
let addClass = document.querySelector('input.classes-to-add');
let removeClass = document.querySelector('input.classes-to-remove');
let appendedToDiv = document.querySelector('.classes-list > div');

// window.onload = (()=>{
//   addClass.focus();
// })
window.addEventListener("load", () => {
  addClass.focus();
});

addClass.addEventListener('blur', function (e) {
  let createdDiv = document.createElement('span');
  this.value.split(' ').map((e)=>{
    if (e !== "" || e != 0) {
      createdDiv.textContent = e;
      createdDiv.classList.add(e);
      // createdDiv.classList.add(addClass.value);
      for (let i = 0; i < e.length; i++) {
        appendedToDiv.appendChild(createdDiv);
      }
    // console.log(e);
    }
    // e !== "" || e != 0 ? console.log(e) : false;
  });
  // document.body.appendChild(createdDiv);
},);

removeClass.addEventListener('blur', function (e) {
  this.value.split(' ').map((e)=>{
    // if (e !== "" || e != 0) {
    //   console.log(e);//try it
    // }
    e !== "" || e != 0 ? console.log(e) : false;
  });
},);


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
