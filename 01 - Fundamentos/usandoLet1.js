var numero = 1;
{
  let numero = 2;
  // retornará 2
  console.log("dentro = ", numero);
}
// retornará 1, pois não estão no mesmo escopo,
// e let não é uma variavel global
console.log("fora = ", numero);
