const pessoa = {
  saudacao: "Bom dia!",
  falar() {
    console.log(this.saudacao);
  },
};

pessoa.falar();
const falar = pessoa.falar;
falar(); // conflito entre paradigmas: fuincional e OO.

// Bind é um método para amarrar um objeto para ser o dono da execução.
const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();
