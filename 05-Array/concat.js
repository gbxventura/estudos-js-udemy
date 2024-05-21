const filhas = ["Ualeskah", "CIbalena"];
const filhos = ["Uoxiton", "Uesclei"];
const todos = filhas.concat(filhos); // junta os dois arrays e cria um só
const todos2 = filhas.concat(filhos, "Fulano"); // Pode-se adicionar junto também
console.log(todos, todos2, filhas, filhos);

// exemplo 3
console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]));
