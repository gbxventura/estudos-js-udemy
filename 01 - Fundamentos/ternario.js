// Calcula a média
const calcMedia = (nota1, nota2, nota3, nota4) => {
  let media = (nota1 + nota2 + nota3 + nota4) / 4;
  return media;
};

// Usa o operador ternario para ver se foi aprovado ou não
const resultado = (media) => (media >= 7 ? "Aprovado" : "Reprovado");

// atribui a uma variavel os resultados
notaFinalAluno = calcMedia(7, 7, 7, 7);
situacaoAluno = resultado(notaFinalAluno);

// imprimi o resultado
console.log(`Sua nota foi ${notaFinalAluno} e você está: ${situacaoAluno}.`);
