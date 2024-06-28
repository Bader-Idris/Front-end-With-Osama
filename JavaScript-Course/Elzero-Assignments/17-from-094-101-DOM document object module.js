

// links will be changing constantly, 🔴 classes are changing though
// I have to only open classes named "open", and its contentText is “Elzero”
// I have to append all code inside the header script not here ⚠️
// last step is easily fixed by creating an [onload function] window.onload function

// 1st Assignment✅



// 2nd Assignment❎(not fully solved) CHALLENGE exists in separated files
// only useful with one element per click
/*
<script>
    // HTML text 🔽
    //  <div class="our-element">Our Element</div>
    //  <p>Paragraph</p>
    // JS Code🔽
    // without making it as function, it's boring
    window.onload = () => {
      document.querySelector('p').remove();
      let mainDiv = document.querySelector('.our-element');
      let preDiv = document.createElement('div');
      let appeDiv = document.createElement('div');
      let textYo = document.createTextNode("Start")
      let textThou = document.createTextNode("End")
      preDiv.setAttribute("class", "start")
      preDiv.setAttribute("title", "Start Element")
      preDiv.setAttribute("data-value", "Start")

      appeDiv.setAttribute("class", "end")
      appeDiv.setAttribute("title", "End Element")
      appeDiv.setAttribute("data-value", "End")

      preDiv.appendChild(textYo)
      appeDiv.appendChild(textThou)
      mainDiv.parentElement.prepend(preDiv)
      document.body.appendChild(appeDiv)
    }
  </script>
*/
// 3rd Assignment✅, although it's boring repeating same function,
//  if I create a func with object values it'll be better [TASK]❎


// document.querySelector('div').childNodes[4];
// 4th Assignment✅

// we have each type of elements in body, onclick we want each to console.log(`this is :${this}`)

// document.body.children.forEach(function(el){
window.onload = () => {
  document.querySelectorAll('body > *:not(script)').forEach((el)=>{
    el.addEventListener('click', function(selected){
      selected.preventDefault();
      console.log(`This Is ${el.nodeName.toLowerCase()}`);
    })
  })
}
// document.querySelectorAll('body > *') //2nd method to get 'em
// the loveliest part of this is that I needed to see prototype of NodeList after called ('body.children')

// 5th assignment✅