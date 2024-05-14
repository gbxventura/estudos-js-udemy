const aluno1 = {
  nome: "Gabriel",
  n1: 10,
  n2: 5.5,
  n3: 6.7,
  n4: 10,
};
const calcMedia = (aluno) => {
  const { nome, n1, n2, n3, n4 } = aluno;
  const media = (n1 + n2 + n3 + n4) / 4;
  return `Aluno: ${nome}, media: ${media}`;
};
console.log(calcMedia(aluno1));
