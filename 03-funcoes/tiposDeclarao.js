console.log(soma(3, 4));
// function declaration
function soma(x, y) {
  return x + y;
}

// function expression
const sub = function (x, y) {
  return x - y;
};
console.log(sub(2, 3));

// named function expression
// beneficio no debug, no stack aparece o nome da função
const mult = function mult(x, y) {
  return x * y;
};
console.log(mult(3, 4));
