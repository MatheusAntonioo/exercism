console.log("car exercises");

console.log("----------------------");

const licenseCar = "car";
const licenseTruck = "truck";

function needsLicense(kind) {
  if (kind === "car" || kind === "truck") {
    return console.log("Precisa");
  } else {
    return console.log("Não precisa");
  }
}

needsLicense("car");

console.log("----------------------");

function chooseVehicle(option1, option2) {
  if (option1 < option2) {
    return console.log(option1);
  } else {
    return console.log(option2);
  }
}

chooseVehicle("bugatti", "audi");

console.log("----------------------");

function calculateResellPrice(originalPrice, age) {
  if (age < 3) {
    return console.log(originalPrice * 0.8);
  } else if (age > 10) {
    return console.log(originalPrice * 0.5);
  } else {
    return console.log(originalPrice * 0.7);
  }
}

calculateResellPrice(1000, 15);

// ----------------------------------------------------------
console.log("---------------------------------------------------");
console.log("---------------------------------------------------");

console.log("birds exercises");
console.log("----------------------");

const birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];

function totalBirdsCount(birdsPerDay) {
  var birds = 0;
  for (let i = 0; i < birdsPerDay.length; i++) {
    birds = birds + birdsPerDay[i];
  }
  return console.log(birds);
}

totalBirdsCount(birdsPerDay);

console.log("----------------------");

const birdsPerWeek = [];

for (let i = 0; i < birdsPerDay.length; i = i + 7) {
  birdsPerWeek.push(birdsPerDay.slice(i, i + 7));
}

function birdsInWeek(birdsPerWeek, week) {
  var bird = birdsPerWeek[week - 1];
  var birds = 0;

  for (let i = 0; i < bird.length; i++) {
    birds = birds + bird[i];
  }

  return console.log(birds);
}

birdsInWeek(birdsPerWeek, 2);

console.log("----------------------");

function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i += 2) {
    birdsPerDay[i] += 1;
  }

  return console.log(birdsPerDay);
}

fixBirdCountLog(birdsPerDay);

// ----------------------------------------------------------
console.log("---------------------------------------------------");
console.log("---------------------------------------------------");
console.log("mixed juices exercises");

console.log("----------------------");

function timeToMixJuice(name) {
  switch (name) {
    case "Pure Strawberry Joy":
      // console.log(0.5);
      return 0.5;
    case "Energizer":
    case "Green Garden":
      // console.log(1.5);
      return 1.5;
    case "Tropical Island":
      // console.log(3);
      return 3;
    case "All or Nothing":
      // console.log(5);
      return 5;
    default:
      // console.log(2.5);
      return 2.5;
  }
}

console.log(timeToMixJuice("Tropical Island"));
timeToMixJuice("Tropical Island");

console.log("----------------------");

function limesToCut(wedgesNeeded, limes) {
  var wedgesCut = 0;
  var limesCut = 0;
  var i = 0;

  while (wedgesCut < wedgesNeeded && i < limes.length) {
    const lime = limes[i];
    switch (lime) {
      case "small":
        wedgesCut = wedgesCut + 6;
        break;
      case "medium":
        wedgesCut = wedgesCut + 8;
        break;
      case "large":
        wedgesCut = wedgesCut + 10;
        break;
      default:
        i++;
        continue;
    }

    limesCut++;
    i++;
  }

  console.log(limesCut);
  return limesCut;
}

limesToCut(25, ["small", "small", "large", "medium", "small"]);

console.log("----------------------");

function remainingOrders(timeLeft, orders) {
  let timeSpent = 0;
  let i = 0;

  while (i < orders.length) {
    const timeForNextJuice = timeToMixJuice(orders[i]);
    // console.log(orders[i]);
    // console.log(i);

    if (timeSpent + timeForNextJuice < timeLeft) {
      timeSpent += timeForNextJuice;
      i++;
    } else {
      i++;
      break;
    }
  }

  console.log(orders.slice(i));
  return orders.slice(i);
  // const remaining = orders.slice(i);
  // console.log(remaining);
  // return remaining;
}

remainingOrders(13, [
  "Pure Strawberry Joy",
  "Pure Strawberry Joy",
  "Vitality",
  "Tropical Island",
  "All or Nothing",
  "All or Nothing",
  "All or Nothing",
  "Green Garden",
  "Limetime",
]);
