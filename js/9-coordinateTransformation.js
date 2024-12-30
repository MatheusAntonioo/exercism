console.log("Coordinate Transformation exercises");

console.log("----------------------");

function translate2d(dx, dy) {
  return function translator(x, y) {
    return [dx + x, dy + y];
  };
}
console.log(translate2d(1, 4));

console.log("----------------------");

function scale2d(dx, dy) {
  return function doubleScale(x, y) {
    return [dx * x, dy * y];
  };
}
console.log(scale2d(1, 4));

console.log("----------------------");

function composeTransform(dx, dy) {
  return function composedTransformations(x, y) {
    const [a, b] = dx(x, y);
    return dy(a, b);
  };
}
console.log(composeTransform(0, 1))

console.log("----------------------");

function memorizeTransform(fn) {
  let lastArgs = null;
  let lastResult = null;

  return function memorizedScale(...args) {
    if (lastArgs && lastArgs.length === args.length && lastArgs.every((arg, index) => arg === args[index])){
      return lastResult;
    }
    lastArgs = args;
    lastResult = fn(...args);
    return lastResult;
  };
}
console.log(memorizeTransform(4, 3))
