function area(largura, altura) {
  const area = largura * altura;
  if (area > 20) {
    console.log(`Valor acima do permitido: ${area}m2.`);
  } else {
    return area;
  }
}

console.log(area()); // NaN
console.log(area(2)); // NaN
console.log(area(10, 10)); // Valor acima do permitido: 100m2.
console.log(area(20, 20)); // Valor acima do permitido: 400m2.
console.log(area(2, 3, 17, 22, 44)); // 6 / Valor acima do permitido: 25m2.
console.log(area(5, 5)); // undefined
