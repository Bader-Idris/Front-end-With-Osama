// let firstProm = prompt('Print Number From – To',"Example: 5-20");
// firstProm.split('-').map((cur, ind, arr) => {
//   sortedArr = arr.sort().reverse();
//   while (+sortedArr[0] <= +sortedArr[1]) {
//     console.log(+sortedArr[0]);
//     +sortedArr[0]++;
//   }
// });
// // 1st Assignment ✅
const range = prompt('Print Number From – To', "5-20").split('-').map(Number);
const [lower, upper] = range.sort((a, b) => a - b);
for (let i = lower; i <= upper; i++) {
  console.log(i);
}
// // Chat GPT3 helping me simplifying the code, and using the love of destructuring functions

window.onload = () => {
  function welcomePopup(){
    const div = document.createElement('div').cloneNode(false);
    let text = "<h2>Welcome</h2><p>Welcome To Elzero Web School</p><span>X</span>";
    div.innerHTML = text;
    div.className = "temper-popup";
    document.body.appendChild(div);// after praying we'll continue babe
    div.style.cssText = `
    width: 600px;
    height: 150px;
    background: #EEE;
    color: #333;
    text-align: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 30px;
    font-family:helvetica;
    z-index: 999;
    border-radius:5px;
    `;
    document.querySelector(".temper-popup h2").style.cssText = `
    margin-bottom: 20px;
    font-size: 30px;
    `;
    const closeButton = document.querySelector(".temper-popup span");
    closeButton.style.cssText = `
    background: #d20b27;
    padding: 5px;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    position: absolute;
    color: #FFF;
    right: -15px;
    top: -15px;
    cursor: pointer;
    font-size: 22px;
    `;
    closeButton.onclick = (e) => {
      e.target.parentElement.remove();
    };
  };
  setTimeout(welcomePopup, 3000);//if func has parameters, we append them after milliseconds as ,'Hanady',29
};
// // 2nd Assignment✅
const thirdDiv = document.createElement('div');
thirdDiv.innerHTML = 10;
function countdown() {
  console.log(thirdDiv.innerHTML);
  if (thirdDiv.innerHTML === '0') {//string because of DOM, if as number, can be as == 0
    clearInterval(counter);
    // window.location.href = "https://elzero.org"; 4th Assignment✅
  }
  if (thirdDiv.innerHTML === '4') window.open('https://elzero.org', '',
    'width=400,height=400,width=400,left=500,top=200');//5th Assignment✅
  thirdDiv.innerHTML -= 1;
}
let counter = setInterval(countdown, 300);// this iterate countDown function
// it worked, but I need to practice more on setInterval() && clearInterval() functions
// 3rd Assignment✅

// 4th Assignment✅ just add window.location.href
//5th Assignment✅ I love this lesson