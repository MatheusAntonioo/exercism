console.log("Lasagna Master exercises");

console.log("----------------------");

function cookingStatus(timer) {
  if (timer === 0) {
    return "Lasanha is done";
  }
  if (!timer) {
    return "You forgot to set the timer.";
  } else {
    return "Not done, please wait.";
  }
}

console.log(cookingStatus(5));

console.log("----------------------");

const layers = ["sauce", "noodles", "sauce", "meat", "mozzarella", "noodles"];

function preparationTime(layers, timeLayer) {
  const numLayers = layers.length;
  if (!timeLayer) {
    return numLayers * 2;
  } else {
    return numLayers * timeLayer;
  }
}

console.log(preparationTime(layers, 0));

console.log("----------------------");

const array = ['sauce', 'noodles', 'sauce', 'meat', 'mozzarella', 'noodles'];

function quantities(array) {
  let result = {noodles: 0, sauce: 0};
  array.forEach((e) => {
    switch (e) {
      case 'noodles':
        result.noodles += 50
        break;
      case 'sauce':
        result.sauce += .2
    }
  });
  return result;
}

console.log(quantities(array))

console.log("----------------------");

const friendsList = ['noodles', 'sauce', 'mozzarella', 'kampot pepper'];
const myList = ['noodles', 'meat', 'sauce', 'mozzarella'];

function addSecretIngredient(friendList, myList) {
  myList.push(friendList[friendList.length - 1])
}

addSecretIngredient(friendsList, myList)
console.log(myList)

console.log("----------------------");

const recipe = {
  noodles: 200,
  sauce: 0.5,
  mozzarella: 1,
  meat: 100,
};

function scaleRecipe(list, portions) {
  var recipe = {};
  for (var key in list) {
    recipe[key] = (list[key] / 2) * portions
  }
  return recipe;
}

console.log(scaleRecipe(recipe, 4))

console.log(recipe)