export class Product{
  public quantity: number
  public price: number
  public available:boolean
  public sublevel_id:number
  public name:string
  public id:string

  constructor(quantity: number, price: number, available:boolean, sublevel_id:number, name:string, id:string){
      this.quantity = quantity;
      this.price = price;
      this.available = available;
      this.sublevel_id = sublevel_id;
      this.name = name;
      this.id = id;
    }

}
