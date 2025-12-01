//Crie uma classe que modele uma conta corrente:
//Atributos: número da conta, nome do correntista e saldo.
//Métodos: alterar nome, depósito e saque.

export class ContaCorrente {
  constructor(
    public numeroConta: string,
    public nomeCorrentista: string,
    private _saldo: number = 0
  ) {}

  get saldo() {
    return this._saldo;
  }

  alterarNome(novoNome: string) {
    this.nomeCorrentista = novoNome;
  }

  deposito(valor: number) {
    if (valor <= 0) throw new Error("Valor inválido");
    this._saldo += valor;
  }

  saque(valor: number) {
    if (valor <= 0) throw new Error("Valor inválido");
    if (valor > this._saldo) throw new Error("Saldo insuficiente");
    this._saldo -= valor;
  }
}





