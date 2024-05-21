const nums = [1, 2, 3, 4, 5];

// O map é um for com propósito, internamento ele tem um for
// pode receber 3 parametros
let resultado = nums.map(function (e) {
  return e * 2;
});
// retornando o dobro do array nums, ele gera um novo array
console.log(resultado, nums);

const soma10 = (e) => e + 10;
const triplo = (e) => e * 3;
const paraDinheiro = (e) => `R$ ${parseFloat(e).toFixed(2).replace(".", ",")}`;

resultado = nums.map(soma10).map(triplo).map(paraDinheiro);
console.log(resultado);
