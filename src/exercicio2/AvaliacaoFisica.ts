//Crie uma classe que modele uma avaliação física de academia:
//Atributos: Id matricula, data da matrícula, aluno e avaliações físicas.
//Informações do aluno, informações da última avaliação e informações de uma avaliação qualquer.

import { Aluno } from "../exercicio1/Aluno";

export interface Avaliacao {
  data: Date;
  peso: number;
  percentualGordura?: number;
  observacoes?: string;
}

export class AvaliacaoFisica {
  constructor(
    public idMatricula: string,
    public dataMatricula: Date,
    public aluno: Aluno,
    public avaliacoesFisicas: Avaliacao[] = []
  ) {}

  adicionarAvaliacao(a: Avaliacao) {
    this.avaliacoesFisicas.push(a);
  }

  infoAluno() {
    return {
      nome: this.aluno.nome,
      idade: this.aluno.calcularIdade(),
      peso: this.aluno.peso,
      altura: this.aluno.altura
    };
  }

  infoUltimaAvaliacao() {
    return this.avaliacoesFisicas[this.avaliacoesFisicas.length - 1] ?? null;
  }
}





