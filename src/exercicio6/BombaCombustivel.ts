//Crie uma classe que modele uma bomba de combustível:
//Atributos: tipo de combustível, valor do litro, quantidade do combustível.

//Métodos:
//1 - Abastecer por valor: método onde é informado o valor a ser abastecido e mostra a quantidade de litros que foi colocada no veículo.
//2 - Abastecer por litro: método onde é informado a quantidade em litros de combustível e mostra o valor a ser pago pelo cliente.
//3 - Alterar o valor do litro do combustível: altera o valor do litro do combustível.
//4 - Alterar quantidade de combustível: altera a quantidade de combustível restante na bomba.

//Sempre que acontecer um abastecimento é necessário atualizar a quantidade de combustível total na bomba. A bomba inicia com 100 L de combustível.

export class BombaCombustivel {
  constructor(
    public tipo: string,
    public valorLitro: number,
    public quantidade: number = 100
  ) {}

  abastecerPorValor(valor: number) {
    const litros = valor / this.valorLitro;
    if (litros > this.quantidade) throw new Error("Combustível insuficiente");
    this.quantidade -= litros;
    return litros;
  }

  abastecerPorLitro(litros: number) {
    if (litros > this.quantidade) throw new Error("Combustível insuficiente");
    this.quantidade -= litros;
    return litros * this.valorLitro;
  }

  alterarValorLitro(novoValor: number) {
    this.valorLitro = novoValor;
  }

  alterarQuantidade(novaQuantidade: number) {
    this.quantidade = novaQuantidade;
  }
}




