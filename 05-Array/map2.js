const carrinho = [
  '{"nome": "Borracha", "preco": 3.45}',
  '{"nome": "Carderno", "preco": 13.90}',
  '{"nome": "Kit de Lapis", "preco": 41.22}',
  '{"nome": "Caneta", "preco": 7.50}',
];

// Retornar um array apenas com os preços
const transformarJson = (json) => JSON.parse(json);
const transformarValor = (produto) => `R$ ${produto.preco}`;
const resultado = carrinho.map(transformarJson).map(transformarValor);
console.log(resultado);
