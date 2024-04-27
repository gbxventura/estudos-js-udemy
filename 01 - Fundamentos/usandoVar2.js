var numero = 1;
{
  var numero = 2;
  console.log("dentro =", numero);
}
// Por ser uma variavel global, ela sobrescreveu.
console.log("fora =", numero);
