// pessoa -> 123 -> {...}
const pessoa = { nome: "joao" };
pessoa.nome = "Pedro";
console.log(pessoa);

// pessoa -> (novo enderço)456 -> {...}
// pessoa = { nome: "Ana" };

// Congela o objeto e você não consegue mais mexer nele.
Object.freeze(pessoa);

pessoa.nome = "Maria";
pessoa.end = "Rua ABC";
console.log(pessoa.nome);
console.log(pessoa);

const pessoaConstante = Object.freeze({ nome: "João" });
console.log(pessoaConstante);
