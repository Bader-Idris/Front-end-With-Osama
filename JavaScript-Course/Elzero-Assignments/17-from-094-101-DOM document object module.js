

// links will be changing constantly, 🔴 classes are changing though
// I have to only open classes named "open", and its contentText is “Elzero”
// I have to append all code inside the header script not here ⚠️
// last step is easily fixed by creating an [onload function] window.onload function

// 1st Assignment✅



// 2nd Assignment CHALLENGE it's tall, so I create an entire directory for it
// ½ is done, only useful with one element per click
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

//test these
/*
document.querySelector('div').children
document.querySelector('div').children
document.querySelector('div').childNodes
document.querySelector('div').childNodes
document.querySelector('div').firstChild
document.querySelector('div').lastChild
document.querySelector('div').firstElementChild
document.querySelector('div').lastElementChild
*/