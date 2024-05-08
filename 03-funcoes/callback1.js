const fabricantes = ["Mecerdes", "Audi", "BMW"];

// jeito 1
function imprimir(nome, indice) {
  console.log(`${indice + 1}. ${nome}`);
}
fabricantes.forEach(imprimir);

//jeito 2
fabricantes.forEach((fabricante) => console.log(fabricante));
