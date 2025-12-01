// Identifique as classes e implemente um programa para a seguinte especificação:
// “O supermercado vende diferentes tipos de produtos. Cada produto tem um preço e uma quantidade em estoque. 
// Um pedido de um cliente é composto de itens, onde cada item especifica o produto que o cliente deseja e a respectiva quantidade. Esse pedido pode ser pago em dinheiro, cheque ou cartão.”


// Produtos e pedidos
export class Produto {
  constructor(public nome: string, public preco: number, public estoque: number) {}
}

export class ItemPedido {
  constructor(public produto: Produto, public quantidade: number) {}

  subtotal() {
    return this.produto.preco * this.quantidade;
  }
}

export type FormaPagamento = 'dinheiro' | 'cheque' | 'cartao';

export class Pedido {
  constructor(public itens: ItemPedido[] = [], public formaPagamento: FormaPagamento = 'dinheiro') {}

  total() {
    return this.itens.reduce((s, i) => s + i.subtotal(), 0);
  }

  verificarEstoque() {
    return this.itens.every(i => i.quantidade <= i.produto.estoque);
  }

  processar() {
    if (!this.verificarEstoque()) throw new Error("Estoque insuficiente");
    this.itens.forEach(i => i.produto.estoque -= i.quantidade);
  }
}




