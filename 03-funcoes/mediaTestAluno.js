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
    nota1: 4,
    nota2: 4,
    nota3: 5,
  },
  aluno3: {
    nome: "Roberto",
    nota1: 10,
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
const situacao = (media) => {
  if (media >= 7) return "Aprovado!";
  else if (media >= 5 && media < 6) return "Recuperação!";
  else return "Reprovado!";
};

console.log(
  `Aluno: ${alunos.aluno1.nome} | Média: ${Math.floor(
    alunos.aluno1.media
  )} | Situação: ${situacao(alunos.aluno1.media)}`
);
console.log(
  `Aluno: ${alunos.aluno2.nome} | Média: ${Math.floor(
    alunos.aluno2.media
  )} | Situação: ${situacao(alunos.aluno2.media)}`
);
console.log(
  `Aluno: ${alunos.aluno3.nome} | Média: ${Math.floor(
    alunos.aluno3.media
  )} | Situação: ${situacao(alunos.aluno3.media)}`
);

// class Aluno {
//   constructor(nome, nota1, nota2, nota3) {
//     this.nome = nome;
//     this.nota1 = nota1;
//     this.nota2 = nota2;
//     this.nota3 = nota3;
//   }

//   calcularMedia() {
//     return (this.nota1 + this.nota2 + this.nota3) / 3;
//   }

//   verificarSituacao() {
//     const media = this.calcularMedia();
//     if (media >= 7) return "Aprovado!";
//     else if (media >= 5 && media < 6) return "Recuperação!";
//     else return "Reprovado!";
//   }
// }

// const aluno1 = new Aluno("Ana", 2, 10, 5);
// const aluno2 = new Aluno("Gabriel", 4, 4, 5);
// const aluno3 = new Aluno("Roberto", 10, 7, 5);

// console.log(`====================
//  BEM VINDO AO SISTEMA DE NOTAS
// ====================`);

// console.log(
//   `Aluno: ${aluno1.nome} | Média: ${Math.floor(
//     aluno1.calcularMedia()
//   )} | Situação: ${aluno1.verificarSituacao()}`
// );
// console.log(
//   `Aluno: ${aluno2.nome} | Média: ${Math.floor(
//     aluno2.calcularMedia()
//   )} | Situação: ${aluno2.verificarSituacao()}`
// );
// console.log(
//   `Aluno: ${aluno3.nome} | Média: ${Math.floor(
//     aluno3.calcularMedia()
//   )} | Situação: ${aluno3.verificarSituacao()}`
// );
