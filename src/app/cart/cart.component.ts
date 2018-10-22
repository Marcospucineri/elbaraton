import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Cart } from './cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})

export class CartComponent implements OnInit {
    cart: Cart
    idToEdit: string = undefined
    qtyToEdit: number = 0
    expandedCart: boolean = false

    constructor(public cartSrv: CartService) { }

    ngOnInit() {
      this.cart = this.cartSrv.getCart();
    }

    toggleCart() {
      this.expandedCart = !this.expandedCart;
    }

    onRemoveItem(product_id: string) {
      this.cartSrv.removeItem(product_id);
      if(this.cart.entries.length == 0){
        this.expandedCart = false;
      }
    }

    onEditQty(id: string, qty: number){
      this.qtyToEdit = qty;
      this.idToEdit = id;
    }

    onEditedQty(id: string){
      this.cartSrv.updateItem(id, this.qtyToEdit);
      this.qtyToEdit = 0;
      this.idToEdit = undefined;
    }

    processCart(){
      alert('Su compra ha sido realizada');
      this.cartSrv.destroyCart();
      this.cart = this.cartSrv.getCart();
    }
}
