
const div = document.createElement("div");
const paragraph = document.createElement('p');
const headTwo = document.createElement("h2");

const header = div.cloneNode(false);
const container = div.cloneNode(false);
const footer = div.cloneNode(false);//if true, you'll get crazy of [deep] actions

const sectionBar = ['HOME', 'ABOUT', 'SERVICE', 'CONTACT'];
const ul = document.createElement('ul');
for (let i = 0; i < 4; i++) {
  const li = document.createElement('li');
  li.textContent = sectionBar[i];
  li.className = sectionBar[i].toLowerCase()
  ul.appendChild(li);
}

let logoText = "Elzero";
const logoHeader = headTwo.cloneNode(false);
logoHeader.innerHTML = logoText;
const logo = div.cloneNode(false);
logo.className = "logo";
logo.appendChild(logoHeader);

header.className = "header";
header.appendChild(logo);

header.appendChild(ul);
for (let i = 0; i < 15; i++) {
  const proH2 = headTwo.cloneNode(false);
  proH2.textContent = i+1;
  const proDesk = paragraph.cloneNode(false);
  proDesk.textContent = 'Product';
  const contDiv = div.cloneNode(false);
  contDiv.appendChild(proH2);

  contDiv.appendChild(proDesk);
  container.appendChild(contDiv);
}
container.className = "container";
footer.className = "footer";
const footPa = paragraph.cloneNode(false);
footPa.textContent = `Copyright ${new Date().getFullYear()}`;
footer.appendChild(footPa);

// document.body.appendChild(header);// instead of repeating this with container and footer use this spread operator method
document.body.append(...[header, container, footer]);// with help of chat GPT3, 4 is exclusive for premium

document.querySelector('*').style = "font-family: helvetica;";
document.body.style.cssText = `
  background-color: #CCC;
  color: #FFF;
  margin: 0;
  padding: 0;
`;
header.style = `/*both are usable, style and its child [cssText] */
  height: 75px;
  display: inline-flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: #FFF;
  color: #333;
  font-weight: bold;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
`;
document.querySelector(".header .logo").style.cssText = `
  flex-basis: 20%;
  margin-left: 50px;
  color: #1f9863;
`;
document.querySelector(".header ul").style.cssText =`
  list-style: none;
  display: flex;
  padding-right: 20px;
  margin-right: 30px;
  width: 33%;
  height: 100%;
`;
document.querySelectorAll(".header ul li").forEach(el => {
  el.style.cssText = `
  flex-basis: calc(100% / 4);
  padding: 15px;
  line-height: 50px;
  cursor: pointer;
`;
});

document.querySelectorAll(".header ul li").forEach((e) => {
  let timeoutId;
  e.onmouseenter = () => {
    e.style.backgroundColor = "#CCC";
  };
  e.onmouseleave = () => {
    timeoutId = setTimeout(() => {
    // clearTimeout(timeoutId);
    e.style.removeProperty("background-color");
  }, 300);
  };
});



document.querySelector(".container").style.cssText =`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: calc(100% - 145px);
  color: #161616;
  padding: 25px 0;
`;
document.querySelectorAll(".container div").forEach(el => {
  el.style.cssText =`
  width: calc(100% /3 - 50px);
  height: 120px;
  background-color: #FFF;
  position: relative;
  padding: 5px;
  margin: 10px;
`;
});

document.querySelectorAll(".container div *").forEach((e)=>{
  e.style.cssText =`
  position: relative;
  text-align: center;
  margin: 20px;
`;
})
document.querySelectorAll(".container p").forEach((e)=>{
  e.style.cssText =`font-size: 18px; top: -5px; text-align: center;`;
});

document.querySelector(".footer").style.cssText =`
  height: 100px;
  text-align: center;
  background: #1f9863;
  color: #FFF;
  font-size: 28px;
  line-height: 50px;
  font-weight: bold;
  position: fixed;
  width: 100%;
  bottom: 0;
`;