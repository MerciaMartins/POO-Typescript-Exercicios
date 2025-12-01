// Faça um programa para controle de empréstimo de livros, com as classes Emprestimo, Livro e Pessoa.

export class Pessoa {
  constructor(public nome: string, public id: string) {}
}

export class Livro {
  constructor(public titulo: string, public autor: string, public disponivel: boolean = true) {}
}

export class Emprestimo {
  constructor(
    public pessoa: Pessoa,
    public livro: Livro,
    public dataEmp: Date = new Date(),
    public dataDev?: Date
  ) {}
}

export class ControleEmprestimos {
  private lista: Emprestimo[] = [];

  emprestar(p: Pessoa, l: Livro) {
    if (!l.disponivel) throw new Error("Livro indisponível");
    const e = new Emprestimo(p, l);
    l.disponivel = false;
    this.lista.push(e);
    return e;
  }

  devolver(l: Livro) {
    l.disponivel = true;
    const e = this.lista.find(x => x.livro === l && !x.dataDev);
    if (e) e.dataDev = new Date();
    return e;
  }

  listar() {
    return [...this.lista];
  }
}


