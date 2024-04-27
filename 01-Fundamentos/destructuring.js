// Novo recurso do ES2015
const pessoa = {
  nome: "Ana",
  idade: 5,
  endereco: {
    logradouro: "Rua ABC",
    numero: 1000,
  },
};

// extraindo o nome e idade do objeto pessoa com destructuring
const { nome, idade } = pessoa;
console.log(nome, idade);

// criando variaveis para atribuir ao nome e idade, para poder usa-los
const { nome: n, idade: i } = pessoa;
console.log(n, i); // Ana, 5

const { sobrenome, bemHumorada = true } = pessoa; // Não foi definido esses atributos
console.log(sobrenome, bemHumorada); // undefined e true

// está acessando logradouro, numero e cep e não o endereço
const {
  endereco: { logradouro, numero, cep },
} = pessoa;
console.log(logradouro, numero, cep); // Rua ABC 1000 undefined
