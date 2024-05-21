// forEach percorre o array inteiro.
const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"];

// jeito 1
aprovados.forEach(function (nome, indice) {
  console.log(`${indice + 1}: ${nome}`);
});
// jeito 2
aprovados.forEach((nome) => console.log(nome));

// jeito 3
const exibirAprovados = (nome) => console.log(nome);
aprovados.forEach(exibirAprovados);
