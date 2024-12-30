console.log("Elyses Looping Enchantments exercises");

console.log("----------------------");

const deck = [1, 2, 3, 4, 2];

function cardTypeCheck(stack, cardType) {
  var count = 0;
  for (const card of stack) {
    if (card === cardType) {
      count++;
    }
  }
  return count;
}
console.log(cardTypeCheck(deck, 2));

console.log("----------------------");

function determineOddEvenCards(stack, type) {
  var even = 0;
  var odd = 0;
  for (const card of stack) {
    if (card % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }
  if (type === true) {
    return even;
  } else {
    return odd;
  }
}
console.log(determineOddEvenCards(deck, false));
