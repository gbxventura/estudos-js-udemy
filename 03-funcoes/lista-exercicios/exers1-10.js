// 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,multiplicação e divisão desses valores.
const calc = (a, b) => {
  console.log(`${a} + ${b} = ${a + b}`);
  console.log(`${a} - ${b} = ${a - b}`);
  console.log(`${a} * ${b} = ${a * b}`);
  console.log(`${a} / ${b} = ${a / b}`);
};
calc(10, 5);
// 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).
const calcTriangulo = (a, b, c) => {
  if (a < b + c && b < a + c && c < a + b) {
    if (a == b && b == c) {
      console.log("Triângulo equilátero");
    } else if (a == b || a == c || c == b) {
      console.log("Triângulo isóceles");
    } else {
      console.log("Triângulo escaleno");
    }
  } else {
    console.log("Nenhuma medida foi informada!");
  }
};
calcTriangulo(2, 3, 4);
calcTriangulo(5, 5, 5);

// 03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
const baseExpoente = (base, expoente) => {
  console.log(Math.pow(base, expoente));
};
baseExpoente(2, 3);

// 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores.
const dividendoDivisor = (dividendo, divisor) => {
  console.log(dividendo / divisor, dividendo % divisor);
};
dividendoDivisor(10, 3);
dividendoDivisor(6, 3);

// 05) Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o
// seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
// importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
// um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
// que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).
const valorEmReais = (valor) => {
  return `R$ ${valor.toFixed(2)}`;
};
console.log(`Valor: ${valorEmReais(0.4)}`);

// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.
const jurosSimples = (capital, taxa, tempo) => {
  return capital + capital * taxa * tempo;
};

const jurosComposto = (capital, taxa, tempo) => {
  return capital * (1 + taxa) ** tempo;
};

console.log("Juros Simples: " + jurosSimples(100, 10 / 100, 2).toFixed(2));
console.log("Juros Composto: " + jurosComposto(100, 10 / 100, 2).toFixed(2));

// 07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
// elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
// parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
// -5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
// que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
// “Delta é negativo”.
const bhaskara = (ax2, bx, c) => {
  let resultados = [];
  let delta = bx ** 2 - 4 * ax2 * c;
  if (delta < 0) {
    return "Delta é negativo";
  }
  let x1 = ((-bx + Math.sqrt(delta)) / 2) * ax2;
  let x2 = ((-bx - Math.sqrt(delta)) / 2) * ax2;
  resultados.push(x1);
  resultados.push(x2);
  return resultados;
};

console.log(bhaskara(3, -5, 12));
console.log(bhaskara(1, 3, 2));

// 08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
// registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
// mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
// pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
// vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
// jogo. (Número do pior jogo).
// Obs.: O primeiro jogo não conta como novo recorde do melhor.
// Exemplo:
// String: “10 20 20 8 25 3 0 30 1”
// Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
// aconteceu no sétimo jogo.)
let stringPontuacao = "10, 20, 20, 8, 25, 3, 0, 30, 1";

const avaliaPontuacao = (stringPontuacao) => {
  let pontuacao = stringPontuacao.split(", ");
  let qtdQuebraRecordes = 0;
  let piorJogo = 1;
  let maiorPontuacao = pontuacao[0];
  let menorPontuacao = pontuacao[0];

  for (let i = 1; i < pontuacao.length; i++) {
    if (pontuacao > maiorPontuacao) {
      maiorPontuacao = pontuacao[i];
      qtdQuebraRecordes++;
    } else if (pontuacao < menorPontuacao) {
      menorPontuacao = pontuacao[i];
      piorJogo = i + 1;
    }
  }
  return [qtdQuebraRecordes, piorJogo];
};

console.log(avaliaPontuacao(stringPontuacao));
