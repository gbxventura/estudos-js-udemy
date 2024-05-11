const pessoa = {
  nome: "Rebeca",
  idade: 2,
  peso: 13,
};
// Irá pegar todas chaves do objeto
console.log(Object.keys(pessoa));
// Irá pegar todos os valores do objeto
console.log(Object.values(pessoa));
// Irá pegar todos os registros em array
console.log(Object.entries(pessoa));

// Podemos percorrer esse objeto
Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`);
});

// Definindo um objeto com atributos a mais.
Object.defineProperty(pessoa, "dataNascimento", {
  enumerable: true, // podera ser listado
  writable: false, // não pode altera-la
  value: "01/01/2019",
});

// Não irá mudar pois, o atributo 'writable' está falso.
pessoa.dataNascimento = "01/01/2017";
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa)); // está listando a data, pois enumerable está true.

// Object.assign (ECMAScript 2015)
// Ele vai concatenar os atributos dos objetos
const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 };
const obj = Object.assign(dest, o1, o2);
console.log(obj);
