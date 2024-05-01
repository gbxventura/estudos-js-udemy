// Criar números aleatórios
function getInteiroAleatorioEntre(min, max) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

let opcao = 0;

// WHile enquanto opcao for diferente de -1
while (opcao != -1) {
  opcao = getInteiroAleatorioEntre(-1, 100);
  console.log(`Opção escolhida foi ${opcao}`);
}
console.log("Até a próxima");
