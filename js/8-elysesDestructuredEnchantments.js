console.log("Elyses Destructured Enchantments exercises");

console.log("----------------------");

const deck = [5, 9, 7, 1, 8];

function getFirstCard(deck) {
  const [firstCard] = deck;
  return firstCard;
}
console.log(getFirstCard(deck));

console.log("----------------------");

function getSecondCard(deck) {
  const [, secondCard] = deck;
  return secondCard;
}
console.log(getSecondCard(deck));

console.log("----------------------");

function swapTopTwoCards(deck) {
  const [firstCard, secondCard, ...othersCards] = deck
  const swap = [secondCard, firstCard, ...othersCards];
  return swap;
}

console.log(swapTopTwoCards(deck))

console.log("----------------------");

function discardTopCard(deck) {
  const [firstCard, ...othersCards] = deck;
  const separateDeck = [firstCard, othersCards || []];
  return separateDeck;
}

console.log(discardTopCard(deck))

console.log("----------------------");

function insertFaceCards(deck) {
  const faceCards = ['jack', 'queen', 'king'];
  const [firstCard, ...othersCards] = deck
  const fullDeck = (!othersCards ? [firstCard].concat(faceCards) : [firstCard].concat(faceCards, othersCards));
  return fullDeck;
}

console.log(insertFaceCards([]))