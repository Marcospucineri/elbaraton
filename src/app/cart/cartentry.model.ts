export class CartEntry {
      public product_id: string
      public name: string
      public price: number
      public qty: number

      constructor(product_id: string, name: string, price: number, qty: number){
        this.product_id = product_id;
        this.name = name;
        this.price = price;
        this.qty = qty
      }
}
