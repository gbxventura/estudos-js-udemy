function getPreco(imposto = 0, moeda = "R$") {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;
}
// const produto = {
//   nome: "Notebook",
//   preco: 4589,
//   desc: 0.15,
//   getPreco,
// };
// globalThis.preco = 20;
// globalThis.desc = 0.1;
// console.log(getPreco());
// console.log(produto.getPreco());

const carro = { preco: 49990, desc: 0.2 };
// Usando Call
console.log(getPreco.call(carro)); // R$ 39992
// Usando Apply
console.log(getPreco.apply(carro)); // R$ 39992

console.log(getPreco.call(carro, 0.17, "$")); // $ 46790.64
console.log(getPreco.apply(carro, [0.17, "$"])); // $ 46790.64
