const bishopDivBlack = createAnElement('div','','piece bishop black','','',"<img src='./images/bishop-black.svg' />"),
      bishopDivWhite = createAnElement('div','','piece bishop white','','',"<img src='./images/bishop-white.svg' />"),
      kingDivBlack = createAnElement('div','','piece king black','','',"<img src='./images/king-black.svg' />"),
      kingDivWhite = createAnElement('div','','piece king white','','',"<img src='./images/king-white.svg' />"),
      knightDivBlack = createAnElement('div','','piece king black','','',"<img src='./images/knight-black.svg' />"),
      knightDivWhite = createAnElement('div','','piece king white','','',"<img src='./images/knight-white.svg' />"),
      queenDivBlack = createAnElement('div','','piece queen black','','',"<img src='./images/queen-black.svg' />"),
      queenDivWhite = createAnElement('div','','piece queen white','','',"<img src='./images/queen-white.svg' />"),
      rookDivBlack = createAnElement('div','','piece rook black','','',"<img src='./images/rook-black.svg' />"),
      rookDivWhite = createAnElement('div','','piece rook white','','',"<img src='./images/rook-white.svg' />"),
      pawnDivBlack = createAnElement('div','','piece pawn black','','',"<img src='./images/pawn-black.svg' />"),
      pawnDivWhite = createAnElement('div','','piece pawn white','','',"<img src='./images/pawn-white.svg' />")
;
function createAnElement(elementType,elementText, elementClass = '', elId = '', elSrc = '',elInner = '') {
  let el = document.createElement(elementType)
  el.textContent = elementText
  el.classList = elementClass
  el.id = elId
  el.src = elSrc
  el.innerHTML = elInner
  return el
}