// Armazenando uma funcao em uma variavel - Função anônima
const imprimirSoma = function (a, b) {
  console.log(a + b);
};
imprimirSoma(2, 3);

// Armazenando uma funcao arrow em uma variável - Arrow Function
const soma = (a, b) => {
  return a + b;
};
console.log(soma(4, 5)); // 9

// retorno implícito
const subtracao = (a, b) => a - b; // Retorno automático, pois possui apenas 1 linha de código
console.log(subtracao(2, 3)); // -1

const imprimir2 = (a) => console.log(a);
imprimir2("legal!!");
