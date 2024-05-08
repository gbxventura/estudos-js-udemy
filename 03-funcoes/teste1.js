const alunos = ["Gabriel", "Joana", "Roberto", "Dircel"];
const notas = [5.5, 6.6, 7.7, 8.8, 9.9, 10];
alunos.forEach((aluno) => console.log(`Aluno: ${aluno} `));

const notasBaixas = notas.filter((nota) => nota < 7);
const notasAltas = notas.filter((nota) => nota >= 7);
console.log("Notas baixas: " + notasBaixas);
console.log("Notas altas: " + notasAltas);
