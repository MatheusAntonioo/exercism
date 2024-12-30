console.log("Elyses Analytic Enchantments exercises");

console.log("----------------------");

const numbers = [3, 5, 4, 2, 7, 9];

const check = numbers.findIndex((num) => num > 5);
console.log(check);

function getCardPosition(stack, card) {
  return stack.findIndex((e) => e === card);
}
console.log(getCardPosition(numbers, 3));

console.log("----------------------");

function doesStackIncludeCard(stack, card) {
  return stack.includes(card);
}
console.log(doesStackIncludeCard(numbers, 5));

console.log("----------------------");

function isEachCardEven(stack) {
  return stack.every((e) => e % 2 === 0);
}
console.log(isEachCardEven(numbers));

console.log("----------------------");

function doesStackIncludeOddCard(stack) {
  return stack.some((e) => e % 2 !== 0);
}
console.log(doesStackIncludeOddCard(numbers));

console.log("----------------------");

function getFirstOddCard(stack) {
  return stack.find((e) => e % 2 !== 0);
}
console.log(getFirstOddCard(numbers));

console.log("----------------------");

function getFirstEvenCardPosition(stack) {
  return stack.findIndex((e) => e % 2 === 0)
}
console.log(getFirstEvenCardPosition(numbers))