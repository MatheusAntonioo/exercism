console.log("Lucky Numbers exercises");

console.log("----------------------");

function twoSum(array1, array2) {
  return Number(array1.join("")) + Number(array2.join(""));
}

console.log(twoSum([1, 2, 3], [0, 7]));

console.log("----------------------");

function luckyNumber(value) {
  let slices = value.toString().split("").map(Number);
  let reverse = slices.reverse().join("");

  if (Number(reverse) === value) {
    return true;
  } else {
    return false;
  }
}

console.log(luckyNumber(1));

console.log("----------------------");

