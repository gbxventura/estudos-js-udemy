console.log(typeof Object); // função
console.log(typeof new Object()); // Objeto

const Cliente = function () {};
console.log(typeof Cliente); // função
console.log(typeof new Cliente()); // objeto

class Produto {}
console.log(typeof Produto); // função
console.log(typeof new Produto()); //objeto

const ex = {}; // criação literal
console.log(typeof ex); // objeto
