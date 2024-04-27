function compras(trabalho1, trabalho2) {
  const comprarSorvete = trabalho1 || trabalho2;
  const comprarTv50 = trabalho1 && trabalho2;
  // OU Exclusivo
  // const comprarTv32 = !!(trabalho1 ^ trabalho2); // bitwise xor
  const comprarTv32 = trabalho1 != trabalho2;
  const manterSaudavel = !comprarSorvete; // operador unário
  return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel };
}

console.log(compras("true and true: ", true, true));
console.log(compras("true and false: ", true, false));
console.log(compras("false and true: ", false, true));
console.log(compras("false and false: ", false, false));
