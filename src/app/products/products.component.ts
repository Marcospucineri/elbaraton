import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Category } from '../categories/category.model';

import { ProductService } from './products.service';
import { Product } from './product.model';

import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {
  @Input() selectedCategory: number;
  products: Product[] = [];

  constructor(public productSrv: ProductService,
              public cartSrv: CartService) { }

  ngOnInit() {
  }

  ngOnChanges(changes){
    this.products = this.productSrv.getProductsBySublevelId(changes.selectedCategory.currentValue);
  }

  onAddProduct(product_id: string, name: string, price: number, qty: number){
    this.cartSrv.addItem(product_id, name, price, qty);
  }

}
