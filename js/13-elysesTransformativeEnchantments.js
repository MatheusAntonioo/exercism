console.log("Elyses Looping Enchantments exercises");

console.log("----------------------");

const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function seeingDouble(deck) {
  return deck.map((e) => e * 2);
}
console.log(seeingDouble(test));

console.log("----------------------");

function threeOfEachThree(deck) {
  const result = [];
  for (var card of deck) {
    if (card === 3) {
      result.push(3, 3, 3);
    } else {
      result.push(card);
    }
  }
  return result;
}
console.log(threeOfEachThree(test));

console.log("----------------------");

function middleTwo(deck) {
  const middle = deck.splice(4, 2);
  return middle;
}
console.log(middleTwo(test));

console.log("----------------------");

function sandwichTrick(deck) {
  const topCard = deck.shift();
  const bottonCard = deck.pop();

  const middleIndex = Math.floor(deck.length / 2);
  deck.splice(middleIndex, 0, bottonCard, topCard);
  return deck;
}
console.log(sandwichTrick(test));

console.log("----------------------");

function twoSpecial(deck) {
  const result = [];
  for (var card of deck) {
    if (card === 2) {
      result.push(card);
    }
  }
  return result;
}
console.log(twoSpecial(test));

console.log("----------------------");

function perfectlyOrdered(deck) {
  return deck.sort((a, b) => a - b);
}
console.log(perfectlyOrdered([10, 1, 5, 3, 2, 8, 7]));

console.log("----------------------");

function reorder(deck) {
  return deck.reverse();
}
console.log(reorder([10, 1, 5, 3, 2]));
