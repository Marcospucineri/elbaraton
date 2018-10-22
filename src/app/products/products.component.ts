import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Category } from '../categories/category.model';

import { ProductService } from './products.service';
import { Product } from './product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {
  @Input() selectedCategory: number;
  products: Product[] = [];

  constructor(public productSrv: ProductService) { }

  ngOnInit() {
  }

  ngOnChanges(changes){
    this.products = this.productSrv.getProductsBySublevelId(changes.selectedCategory.currentValue);
  }

}
