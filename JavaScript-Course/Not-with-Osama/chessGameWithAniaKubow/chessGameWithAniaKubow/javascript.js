const gameBoard = document.querySelector('#gameboard'),
      playerDisplay = document.querySelector('#player'),
      infoDisplay = document.querySelector('#info-display'),
      width = 8
;
let startPieces = []
const whitePieces = ['bishop-black.svg','king-black.svg','knight-black.svg','pawn-black.svg','queen-black.svg','rook-black.svg']
const blackPieces = ['bishop-white.svg','king-white.svg','knight-white.svg','pawn-white.svg','queen-white.svg','rook-white.svg']
const pathWhite = [...whitePieces].forEach((e)=> {
  addingImgs(e, gameBoard)
})
const pathBlack = [...blackPieces].forEach((e)=> {
  addingImgs(e, gameBoard)
})
function addingImgs(e, dom) {
  let img = document.createElement("img"),
      div = document.createElement("div")
  img.src = `./images/${e}`
  img.classList.add(e.slice(0,-4))
  img.style.width = 30 + "px"
  div.className = 'piece'
  div.id = e.slice(0,-4);
  div.appendChild(img)
  startPieces.push(div)
}
for (let i = 0; i < 8; i++) {
  startPieces.push(startPieces[3].cloneNode(true),startPieces[9].cloneNode(true),'','','','')
}
startPieces.sort().reverse()

for (let i = 0; i < startPieces.length - (8 * 4); i++) {
  document.body.appendChild(startPieces[i])
}
for (let i = 0; i < 2; i++) {
  startPieces.push(
    startPieces[16].cloneNode(true),
    startPieces[19].cloneNode(true),
    startPieces[21].cloneNode(true),
    startPieces[22].cloneNode(true),
    startPieces[25].cloneNode(true),
    startPieces[27].cloneNode(true)
  )
}