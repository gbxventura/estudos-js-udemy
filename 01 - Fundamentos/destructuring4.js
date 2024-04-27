// Gerar números de forma aleatória de 0 a 1000
function rand([min = 0, max = 1000]) {
  // Se o min for maior que o max, troque para max e min
  // Ele cria um novo array
  if (min > max) [min, max] = [max, min];
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}
// Print números aleatórios de 40 a 50
console.log(rand([50, 40]));

// min será 992 e max continuará 1000
console.log(rand([992]));

// Podemos passar apenas o segundo elemento, ignorando o min
// será de 0 a 10
console.log(rand([, 10]));

// Irá ficar entre 0 e 1000
console.log(rand([]));
