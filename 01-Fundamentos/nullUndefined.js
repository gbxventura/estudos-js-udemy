let valor; // Não inicialiada
console.log(valor);

valor = null; // ausência de valor
console.log(valor); // null
// console.log(valor.toString()); // erro, não se pode acessar valores nulos

const produto = {};
console.log(produto.preco); // undefined

produto.preco = 3.5; // adicionando à chave preco o valor de 3.5
console.log(produto);

produto.preco = undefined; // Não é legal fazer isso. Usa-se null
console.log(!!produto.preco);
delete produto.preco; // apagando o atributo do objeto

console.log(produto); // está sem atributo nenhum

produto.preco = null; // sem preço
console.log(produto.preco);
