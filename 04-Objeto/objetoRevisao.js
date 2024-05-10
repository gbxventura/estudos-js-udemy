// coleção dinâmica de pares chave/valor
const produto = new Object();
produto.nome = "Cadeira";
produto["marca do produto"] = "Generica";
produto.preco = 200;

console.log(produto);
delete produto.preco;
delete produto["marca do produto"];
console.log(produto);

const carro = {
  modelo: "A4",
  valor: 89000,
  propietario: {
    nome: "Raul",
    idade: 564,
    endereco: {
      logradouro: "Rua ABC",
      numero: 123,
    },
  },
  condutores: [
    {
      nome: "Junior",
      idade: 19,
    },
    {
      nome: "Ana",
      idade: 42,
    },
  ],
  calcularValorSeguro: function () {
    // ...
  },
};

carro.propietario.endereco.numero = 1000;
carro["propietario"]["endereco"]["logradouro"] = "Av Gigante";
console.log(carro);
console.log(carro.condutores);
console.log(carro.condutores.length);

delete carro.condutores;
delete carro.propietario.endereco;
delete carro.calcularValorSeguro;
console.log(carro);
console.log(carro.condutores); // vai ficar undefined pois acessou carro que existe e não existe condutores mais pois foi apagado
