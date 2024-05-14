const pessoa1 = {
  nome: "Gabriel",
  idade: 21,
  sexo: "Masculino",
  logradouro: "Rua visconde de tauny",
  numeroEnd: 45,
  bairroEnd: "Centro",
};
const pessoa2 = {
  nome: "Roberto",
  idade: 50,
  sexo: "Masculino",
  logradouro: "Rua dos cambimbers",
  numeroEnd: 400,
  bairroEnd: "São Matheus",
};
const pessoa3 = {
  nome: "Joana",
  idade: 20,
  sexo: "Feminino",
  logradouro: "Rua da felicidade",
  numeroEnd: 123,
  bairroEnd: "Bairro do nunca",
};

const apresentarPessoa = (pessoa) => {
  const { nome, idade, sexo, logradouro, numeroEnd, bairroEnd } = pessoa;
  console.log(
    `Olá usuario, meu nome é ${nome}, sou do sexo ${sexo} e possuo ${idade} anos. Atualmente moro no endereço ${
      logradouro + ", numero " + numeroEnd + ", " + bairroEnd
    }`
  );
};

apresentarPessoa(pessoa1);
console.log("====================================");
apresentarPessoa(pessoa2);
console.log("====================================");
apresentarPessoa(pessoa3);
console.log("====================================");
