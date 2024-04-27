const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
valores[4] = 10;

console.log(valores);
console.log(valores.length);

valores.push({ id: 3 }, false, null, "teste"); // adiciona um valor com push
console.log(valores);

console.log(valores.pop()); // remove o valor com pop

delete valores[0]; // remove o primeiro valor
console.log(valores);

console.log(typeof valores); // array é um objeto
