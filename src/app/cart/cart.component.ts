import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})

export class CartComponent implements OnInit {
    cart: Cart;

    constructor(public cartSrv: CartService) { }

    ngOnInit() {
      this.cart = this.cartSrv.getCart();
    }

    onRemoveItem(product_id: string) {
      this.cartSrv.removeItem(product_id);
    }
}
