const nome = "Rebeca";
const concatenacao = "OLá " + nome + "!";
// template string
const template = `
    OLá
    ${nome}!`;
console.log(concatenacao, template);

// expresões
console.log(`1 + 1 =  ${1 + 1}`);

const up = (texto) => texto.toUpperCase();
console.log(`Ei... ${up("cuidado")}`);
