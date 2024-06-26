// Função em JS é First-Class Object (Citizens)
// High-order function

// Criar de forma literal
function fun1() {}

// Armazenar em uma variável -> Função Anonima
const fun2 = function () {};
fun2();

// Armazenar em um array - Função Anonima
const array = [
  function (a, b) {
    return a + b;
  },
  fun1,
  fun2,
];

console.log(array[0](2, 3)); // fez a soma, que está dentro do array

// Armazenar em um atributo de objeto -> Aoninma
const obj = {};
obj.falar = function () {
  return "Opa";
};
console.log(obj.falar());

// Passar função como parâmetro
function run(fun) {
  fun();
}

run(function () {
  console.log("Executando...");
});

// Uma função pode retornar/conter uma função
function soma(a, b) {
  return function (c) {
    console.log(a + b + c);
  };
}

soma(2, 3)(4);

const cincoMais = soma(2, 3);
cincoMais(4);
