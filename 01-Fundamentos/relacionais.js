// == compara a igualdade dos valores
console.log("01)", "1" == 1); // true

// === compara se é extritamente igual, tipo e valor
console.log("02)", "1" === 1); // false

// Compara se é diferente
console.log("03)", "3" != 3); // false

// Compara se são extritamente diferentes
console.log("04)", "3" !== 3); // true

// Compara se 3 é menor que 2
console.log("05)", 3 < 2); // false

// Compara se 3 é maior que 2
console.log("06)", 3 > 2); // true

// Compara se 3 menor ou igual a 2
console.log("07)", 3 <= 2); // false

// Compara se 3 maior ou igual a 2
console.log("08)", 3 >= 2); // true

// Será falso pois compara a referencia na memória
const d1 = new Date(0);
const d2 = new Date(0);
console.log("09)", d1 === d2);
console.log("10)", d1 === d2);

// Compara o valor que está atribuido (numero) ao d1 e d2
console.log("11)", d1.getTime() == d2.getTime()); // true
console.log("12)", d1.getTime() === d2.getTime()); // true

// undefined e null são vazios, então são iguais no valor
// Porém no tipo são diferentes
console.log("13)", undefined == null); // true
console.log("14)", undefined === null); // false
