//Crie uma classe que modele um macaco:
//Atributos: Nome e bucho (estômago).
//Métodos: Comer, verBucho e digerir.
//Faça um programa e teste interativamente:
//Crie 2 macacos
//Alimente-os com 3 alimentos diferentes e verificando o conteúdo do estômago a cada refeição.
//Experimente fazer com que um macaco coma o outro. É possível criar um macaco canibal?

export class Macaco {
  public bucho: string[] = [];

  constructor(public nome: string) {}

  comer(a: string | Macaco) {
    this.bucho.push(a instanceof Macaco ? `macaco: ${a.nome}` : a);
  }

  verBucho() {
    return [...this.bucho];
  }

  digerir() {
    this.bucho = [];
  }
}





