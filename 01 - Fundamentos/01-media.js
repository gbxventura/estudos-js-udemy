const aluno = "Gabriel";

function calcularMedia(n1, n2, n3, n4) {
  let media = (n1 + n2 + n3 + n4) / 4;
  return media;
}

const situacao = (media) => {
  if (media >= 6) {
    return "aprovado!";
  } else if ((media = 5)) {
    return "Você está de recuperação!";
  } else {
    return "Você está reprovado!";
  }
};

// entrada
let n1 = 10;
let n2 = 9;
let n3 = 8;
let n4 = 7;

let media = calcularMedia(n1, n2, n3, n4);
let situAcao = situacao(media);

console.log(
  `================ [ Média do ${aluno.toUpperCase()}] =================
  Olá ${aluno}, sua média foi de ${media.toFixed(2)} e você está: ${situAcao} 
  ================================================`
);
