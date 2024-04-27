// ===[ MÉTODO 1 ] ===
//Cria o objeto vazio
const prod1 = {};
//Adiciona chave e valor
prod1.nome = "Celular";
prod1.preco = 4998.9;
prod1["Desconto legal"] = 0.4; // evitar atributos com espaçamentos
//Mostrando ele no console
console.log(prod1);

// ===[ MÉTODO 2 ] ===
const prod2 = {
  nome: "Camisa Polo",
  preco: 79.9,
  tamanho: "G",
};
console.log(prod2);
