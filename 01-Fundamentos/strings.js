const escolha = "C0d3r";
const nome = "Gabriel";

// charAt & indexOf
console.log(escolha.charAt(4)); // imprimi o caracter de index 4 (r)
console.log(escolha.charAt(5)); // imprimi o caracter de index 5 (nada), ele não da erro igual outras linguagens
console.log(escolha.indexOf("r")); // Ele pega imprimi em que posição da o caracter que você colocou, no caso (4)

//substring
console.log(escolha.substring(1)); // imprimi do index 1 para frente
console.log(escolha.substring(0, 3)); // imprimi do index 0 até o 3, mas sem imprimir o 3

console.log("Escolha ".concat(escolha.concat("!"))); // o mesmo resultado com +

//concat
console.log(`Olá ${nome}, você estuda no `.concat(escolha).concat("?")); // o mesmo resultado com +

// replace & regex
console.log(escolha.replace(3, "e"));
console.log(escolha.replace(/\d/g, "e")); // substitui todos os digitos por "e"
console.log(escolha.replace(/\w/g, "e")); // substitui todos caracteres e digitos por "e"

// split & refex
console.log("Ana, Maria, Pedro".split(",")); // o split faz virar um array
console.log("Ana, Maria, Pedro".split(/,/)); // o split faz virar um array, porém com regex
