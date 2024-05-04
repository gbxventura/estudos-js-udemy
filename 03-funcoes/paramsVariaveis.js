function soma() {
  let soma = 0;
  for (i in arguments) {
    soma += arguments[i];
  }
  return soma;
}

console.log(soma()); // 0
console.log(soma(1)); // 1
console.log(soma(1.1, 2.2, 3.3)); // 6.6

console.log(soma(1.1, 2.2, 3.3, "Teste")); // 6.6Teste
console.log(soma("a", "b", "c")); //0abc
