
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

document.body.appendChild(header);
document.body.appendChild(container);
document.body.appendChild(footer);