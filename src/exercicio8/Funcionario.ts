//Crie uma classe que modele um funcionário.
//Um empregado tem um nome (String) e um salário (Double)
//Escreva um construtor com dois parâmetros (nome e salário)
//Métodos para devolver nome, salário, aumentar salário (porcentualDeAumento) que aumente o salário do funcionário em uma certa porcentagem.
//Escreva um pequeno programa que teste sua classe.

export class Funcionario {
  constructor(public nome: string, private _salario: number) {}

  get salario() {
    return this._salario;
  }

  aumentarSalario(percentual: number) {
    this._salario *= 1 + percentual / 100;
  }
}





