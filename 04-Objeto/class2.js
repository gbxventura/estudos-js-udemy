class Avo {
  constructor(sobrenome) {
    this.sobrenome = sobrenome;
  }
}
class Pai extends Avo {
  constructor(sobrenome, profissao = "Professor") {
    super(sobrenome); // deve-se chamar super para receber o sobrenome do avo
    this.profissao = profissao;
  }
}
class Filho extends Pai {
  constructor() {
    super("Silva");
  }
}
const filho = new Filho();

console.log(filho);
