// Função para gerar numeros aleatórios

function rand({ min = 0, max = 1000 }) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}
// mesma coisa
// const obj = { max: 50, min: 40 };

// passamos o minimo 40 e max 955
console.log(rand({ max: 955, min: 40 }));
// passamos apenas min 40 e vai até 1000 como feito na função
console.log(rand({ min: 40 }));
// gera de 0 a 1000
console.log(rand({}));
