// Class
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  falar() {
    console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}
const p1 = new Pessoa("João", 18);
p1.falar();

const p2 = new Pessoa("Gabriel", 21);
p2.falar();
// Factory
const criarPessoa = (nome) => {
  return {
    falar: () => console.log(`Meu nome é ${nome}`),
  };
};
const p3 = criarPessoa("Roberto");
p3.falar();
