console.log("Coordinate Transformation exercises");

console.log("----------------------");

function translate2d(dx, dy) {
  return function translator(x, y) {
    return [dx + x, dy + y];
  };
}
console.log(translate2d(1, 4));

function scale2d(dx, dy) {
  return function doubleScale(x, y) {
    return [dx * x, dy * y];
  };
}
console.log(scale2d(1, 4));

function composeTransform(dx, dy) {
  return function composedTransformations(x, y) {
    const [a, b] = dx(x, y);
    return dy(a, b);
  };
}

function memoizeTransform(fn) {
  let lastArgs = null; // Armazena os últimos argumentos usados
  let lastResult = null; // Armazena o último resultado calculado

  return function (x, y) {
    // Verifica se os argumentos atuais são iguais aos últimos
    if (lastArgs && lastArgs[0] === x && lastArgs[1] === y) {
      return lastResult; // Retorna o resultado memorizado
    }

    // Caso contrário, calcula o resultado e armazena os argumentos e o resultado
    lastArgs = [x, y];
    lastResult = fn(x, y);
    return lastResult;
  };
}
