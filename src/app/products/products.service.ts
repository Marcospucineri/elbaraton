import { Injectable } from "@angular/core";
import { Product } from './product.model'
@Injectable()
export class ProductService{

    products = { "products": [ { "quantity": 308, "price": "$8,958", "available": false, "sublevel_id": 3, "name": "aute 3", "id": "58b5a5b1b6b6c7aacc25b3fb" },{ "quantity": 308, "price": "$8,958", "available": false, "sublevel_id": 3, "name": "aute2", "id": "58b5a5b1b6b6c7aacc25b3fb" },{ "quantity": 308, "price": "$8,958", "available": false, "sublevel_id": 2, "name": "aute", "id": "58b5a5b1b6b6c7aacc25b3fb" } ] }

    constructor() {}

    getProducts(){
      return this.products.products.map(
        (item) => {
          if(typeof item.price == 'string'){
            item.price = item.price.replace('$','').replace(',','');
          }
          return item;
        }
      );
    }

    getProductsBySublevelId(id:number){
      return this.getProducts().filter(
        (item) => {
          return item.sublevel_id == id;
        }
      )
    }

}
