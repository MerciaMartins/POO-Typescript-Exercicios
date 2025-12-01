//Crie uma classe que modele um aluno de academia:
// Atributos: Nome, data de nascimento, peso e altura.
// Métodos: Calcula idade.


export class Aluno {
  constructor(
    public nome: string,
    public dataNascimento: Date,
    public peso: number,
    public altura: number
  ) {}

  calcularIdade(): number {
    const hoje = new Date();
    let idade = hoje.getFullYear() - this.dataNascimento.getFullYear();

    const mesNasc = this.dataNascimento.getMonth();
    const diaNasc = this.dataNascimento.getDate();

    if (
      hoje.getMonth() < mesNasc ||
      (hoje.getMonth() === mesNasc && hoje.getDate() < diaNasc)
    ) {
      idade--;
    }

    return idade;
  }
}





