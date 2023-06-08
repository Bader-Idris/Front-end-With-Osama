// import * from './pieces';
const gameBoard = document.querySelector('#gameboard'),
      playerDisplay = document.querySelector('#player'),
      infoDisplay = document.querySelector('#info-display'),
      width = 8
;
let startPieces = [
  rookDivBlack, knightDivBlack, bishopDivBlack, kingDivBlack, queenDivBlack, bishopDivBlack, knightDivBlack, rookDivBlack, 
  pawnDivBlack, pawnDivBlack, pawnDivBlack, pawnDivBlack, pawnDivBlack, pawnDivBlack, pawnDivBlack, pawnDivBlack,
  //! now put empty pieces
  '','','','','','','','',
  '','','','','','','','',
  '','','','','','','','',
  '','','','','','','','',
  //! -----------
  pawnDivWhite, pawnDivWhite, pawnDivWhite, pawnDivWhite, pawnDivWhite, pawnDivWhite, pawnDivWhite, pawnDivWhite, 
  rookDivWhite, knightDivWhite, bishopDivWhite, kingDivWhite, queenDivWhite, bishopDivWhite, knightDivWhite, rookDivWhite, 
]
function createBoard () {
  startPieces.forEach((sPiece, i)=> {
    const square = document.createElement('div')
    square.setAttribute('square-id', i)
    square.append(sPiece)
    square.className = 'square'
    gameBoard.append(square)
  })
};
createBoard()