function Pessoa(nome) {
  this.nome = nome;

  this.falar = function () {
    return console.log(`Esse é meu nome: ${this.nome}`);
  };
}
const p1 = new Pessoa("João");
p1.falar();
