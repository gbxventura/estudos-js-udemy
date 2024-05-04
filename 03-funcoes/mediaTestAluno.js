console.log(`====================
 BEM VINDO AO SISTEMA DE NOTAS
====================`);
const media = (n1 = 0, n2 = 0, n3 = 0) => {
  return (n1 + n2 + n3) / 3;
};
const alunos = {
  aluno1: {
    nome: "Ana",
    nota1: 2,
    nota2: 10,
    nota3: 5,
  },
  aluno2: {
    nome: "Gabriel",
    nota: 4,
    nota2: 4,
    nota3: 5,
  },
  aluno3: {
    nome: "Roberto",
    nota: 10,
    nota2: 7,
    nota3: 5,
  },
};
for (let aluno in alunos) {
  alunos[aluno].media = media(
    alunos[aluno].nota1,
    alunos[aluno].nota2,
    alunos[aluno].nota3
  );
}

console.log(alunos.aluno1.media);
