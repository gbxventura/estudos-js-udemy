const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"];
pilotos.pop(); // remover o ultimo elemento do array
console.log(pilotos);

pilotos.push("Verstappen"); // adiciona um novo elemento na ultima posição
console.log(pilotos);

pilotos.shift(); // Remove o primeiro elemento do array
console.log(pilotos);

pilotos.unshift("Hamilton"); // adiciona um novo elemento na primeira posição do Array
console.log(pilotos);

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, "Botas", "Massa"); // vai adicionar a apartir do indice 2, sem remover
console.log(pilotos);

pilotos.splice(3, 1); // remover 1 na posição 3
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); // retorna um novo array a partir do indice 2
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4); // pega um pedaço do array do indice 1 ate o indice 4
console.log(algunsPilotos2);
