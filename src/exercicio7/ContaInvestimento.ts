//Faça uma classe contaInvestimento que seja semelhante a classe ContaBancaria, com a diferença de que se adicione um atributo taxaJuros.
//Forneça um construtor que configure tanto o saldo inicial com a taxa de juros
//Forneça um método adicioneJuros (sem parâmetro explícito) que adicione juros à conta
//Escreva um programa que construa uma poupança com um saldo inicial de R$1.000,00 e uma taxa de juros de 10%
//Depois aplique o método adicioneJuros() cinco vezes e imprima o saldo resultante


// Conta Bancária base
export class ContaBancaria {
  constructor(public saldo: number = 0) {}

  depositar(valor: number) {
    this.saldo += valor;
  }

  sacar(valor: number) {
    if (valor > this.saldo) throw new Error("Saldo insuficiente");
    this.saldo -= valor;
  }
}

// Conta Investimento com juros
export class ContaInvestimento extends ContaBancaria {
  constructor(saldoInicial: number, public taxaJuros: number) {
    super(saldoInicial);
  }

  adicioneJuros() {
    this.saldo += (this.saldo * this.taxaJuros) / 100;
  }
}





