const a = 1;
const b = 2;
const c = 3;

// Na versão anterior, era necessario colocar a chave e valor mesmo sendo iguais.
const obj1 = { a: a, b: b, c: c };

// Nessa versão do ES, podemos apenas colocar o atributo.
const obj2 = { a, b, c };

// São exatamente iguais.
console.log(obj1, obj2);

// Podemos declarar com notação literal
const nomeAttr = "nota";
const valorAttr = 7.87;
const obj3 = {};
obj3[nomeAttr] = valorAttr;
console.log(obj3);

//
const obj4 = { [nomeAttr]: valorAttr };
console.log(obj4);

const obj5 = {
  // anteriormente
  funcao1: function () {
    // ...
  },
  // agora
  funcao2() {
    // ...
  },
};

console.log(obj5);
