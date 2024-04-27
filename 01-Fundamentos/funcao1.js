// Funcao sem retorno
function imprimirSoma(a, b) {
  console.log(a + b);
}
imprimirSoma(2, 3); // 5
imprimirSoma(2); // NaN
imprimirSoma(10, 3, 4, 5, 6, 7, 8); // Soma apenas os parametros e ignora o resto
imprimirSoma(); // NaN

// Funcao com retorno
function soma(a, b = 0) {
  return a + b;
}

console.log(soma(2, 5)); // 7
console.log(soma(2)); // 2, pois definido b como 0, e passei apenas 1 parametro.
