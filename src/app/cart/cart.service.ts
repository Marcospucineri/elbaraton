import { Injectable } from '@angular/core';
import { Cart } from './cart.model';
import { CartEntry } from './cartentry.model';

@Injectable()
export class CartService {
  cart:Cart

  constructor() {
    debugger;
    if(localStorage.getItem('cart')){
      this.cart = JSON.parse(localStorage.getItem('cart'));
    } else {
      this.cart = new Cart();
    }
  }

  getCart(){
    return this.cart;
  }

  addItem(product_id: string, name: string, price:number, qty:number){
    let cartProductIndex = this.cart.entries.findIndex(element => element.product_id == product_id);

    if(cartProductIndex != -1){
      this.cart.entries[cartProductIndex].qty += qty;
    } else {
      this.cart.entries.push(new CartEntry(product_id, name, price, qty));
    }
    this.updateCartTotal();
    this.saveCart();
  }

  editItem(product_id: string, qty:number){

  }

  removeItem(product_id: string){
    debugger;
    let cartProductIndex = this.cart.entries.findIndex(element => element.product_id == product_id);
    if(cartProductIndex != -1){
      this.cart.entries.splice(cartProductIndex, 1);
    }
    this.updateCartTotal();
    this.saveCart();
  }

  updateCartTotal(){
    let subtotal = 0;
    this.cart.entries.forEach(element => subtotal += element.price * element.qty);
    this.cart.total = subtotal;
  }

  saveCart(){
    localStorage.setItem('cart', JSON.stringify(this.cart)));
  }
}
