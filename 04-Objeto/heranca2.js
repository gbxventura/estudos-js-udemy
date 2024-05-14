// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = "0"; // não faça isso em casa.
const avo = { atrr1: "A" };
const pai = { __proto__: avo, attr2: "B" };
const filho = { __proto__: pai, attr3: "C" };

console.log(filho.atrr1); // A, pois achou no avô
console.log(filho.attr0); // undefined pois não existe em nenhum objeto o atributo 0, foi adicionado posteriomente então foi encontrado, porém não é correto.
console.log(filho.atrr1, filho.attr2, filho.attr3); // A B C

const carro = {
  velAtual: 0,
  velMax: 200,
  acelerarMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta;
    } else {
      this.velAtual = this.velMax;
    }
  },
  status() {
    return `${this.velAtual}Km/h de ${this.velMax}Km/h`;
  },
};
const ferrari = {
  modelo: "F40",
  velMax: 324, // shadowing
};
const volvo = {
  modelo: "V40",
  status() {
    return `${this.modelo}: ${super.status()}`;
  },
};

Object.setPrototypeOf(ferrari, carro); // ferrari tera com prototypo carro
Object.setPrototypeOf(volvo, carro);
console.log(ferrari);
console.log(volvo);

volvo.acelerarMais(100);
console.log(volvo.status());

ferrari.acelerarMais(300);
console.log(ferrari.status());
