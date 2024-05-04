// estrategia 1 para gerar valor padrão
function soma1(a, b, c) {
  a = a || 1;
  b = b || 1;
  c = c || 1;
  return a + b + c;
}

console.log(soma1()); // 3
console.log(soma1(3)); // 5
console.log(soma1(1, 2, 3)); // 6
console.log(soma1(0, 0, 0)); // 3

// Estrategia 2,3 e 4 para gerar valor padrão
function soma2(a, b, c) {
  a = a !== undefined ? a : 1;
  b = 1 in arguments ? b : 1;
  c = isNaN(c) ? 1 : c;
  return a + b + c;
}

console.log(soma2()); // 3
console.log(soma2(3)); // 3
console.log(soma2(1, 2, 3)); // 6
console.log(soma2(0, 0, 0)); // 3

// Valor padrão do ES2015
function soma3(a = 1, b = 1, c = 1) {
  return a + b + c;
}
console.log(soma3()); // 3
console.log(soma3(3)); // 3
console.log(soma3(1, 2, 3)); // 6
console.log(soma3(0, 0, 0)); // 3

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

const media = (n1 = 0, n2 = 0, n3 = 0) => {
  return (n1 + n2 + n3) / 3;
};

console.log(`Aluno: ${alunos.aluno1.nome} |Nota: ${alunos.aluno1.nota}`);
console.log(`Aluno: ${alunos.aluno2.nome} |Nota: ${alunos.aluno2.nota}`);
console.log(`Aluno: ${alunos.aluno3.nome} |Nota: ${alunos.aluno3.nota}`);
