// O array não existe nativamente no javascript, ele é um objeto.
// Ele tem os propópios atríbutos, porém não deixa de ser um Objeto.
console.log(typeof Array, typeof Array(), typeof new Array(), typeof []);

let aprovados = new Array("Bia", "Carlos", "Ana"); // criando array forma 1
console.log(aprovados);

aprovados = ["Bia", "Carlos", "Ana"]; // criando array forma 2
console.log(aprovados[0]); // chamando array pelo index 0
console.log(aprovados[1]); // chamando array pelo index 1
console.log(aprovados[2]); // chamando array pelo index 2
console.log(aprovados[3]); // chamando array pelo index 3 (não existe, então é undefined)

aprovados[3] = "Paulo"; // adicionou a index 3 o paulo
aprovados.push("Abia"); // adicionar elemento ao array.
console.log(aprovados.length);

aprovados[9] = "Rafael";
console.log(aprovados.length);
console.log(aprovados[8] === undefined); // todos index entre 6 e 8 é undefined
console.log(aprovados);

aprovados.sort(); // organizar o array de forma ordenada
console.log(aprovados);

delete aprovados[1]; // irá virar undefined
console.log(aprovados[1]);

aprovados = ["Bia", "Carlos", "Ana"];
aprovados.splice(1, 1); // adiciona elementos ao index, remove, e adiciona e remove ao mesmo tempo
console.log(aprovados); // Carlos foi removido
aprovados.splice(1, 2, "Elemento1", "Elemento2"); // A partir do index 2 vai remover os 2 e adicionar 2 elementos
console.log(aprovados);
aprovados.splice(3, 0, "elemento3", "elemento4"); // não remove e adiciona mais 2 a partir do index 3
console.log(aprovados);
