// par nome/valor
const saudacao = "Opa"; // contexto léxico 1

function exec() {
  const saudacao = "Falaa"; // contexto léxico 2
  return saudacao;
}

// Objetos são grupos aninhados de chave e valor/nome
const cliente = {
  nome: "Pedro",
  idade: 32,
  peso: 90,
  endereco: {
    logradouro: "Rua Muito Legal",
    numero: 123,
  },
};

console.log(saudacao); // Opa
console.log(exec()); // Falaa
console.log(cliente); // objeto de cliente
