// Função para calcular a média de um conjunto de notas
function calcularMedia(...notas) {
  const total = notas.reduce((acc, nota) => acc + nota, 0);
  return total / notas.length;
}

// Notas do aluno
const notas = [5, 9.5, 5.5, 4.7];

// Exibindo as notas do aluno
console.log("Notas do aluno:");
notas.forEach((nota, index) => {
  console.log(`Nota ${index + 1}: ${nota}`);
});

// Calculando a média
const media = calcularMedia(...notas);

// Determinando o status do aluno
if (media >= 7) {
  console.log("Aprovado");
} else if (media >= 5) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}
