const [a] = [10];
console.log(a);

// Com destructuring o
// 10 ficará no n1
// 7 será ignorado pois está no valor vazio
// 9 ficará no n3
// 8 será ignorado pois está no valor vazio
// n5 será undefined pois não passamos nada
// n6 será 0, pois foi atribuido um valor á ele

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8];
console.log(n1, n3, n5, n6);

const [, [, nota]] = [
  [, 8, 8],
  [9, 6, 8],
];
console.log(nota); // 6
