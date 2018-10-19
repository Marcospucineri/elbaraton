export class CartEntry {
      public product_id: string
      public qty: number

      constructor(product_id: string, qty: number){
        this.product_id = product_id;
        this.qty = qty
      }
}
