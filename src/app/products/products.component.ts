import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../categories/category.model';
import { ProductService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {
  @Input() selectedCategory: number;

  constructor(public productSrv: ProductService) { }

  ngOnInit() {
    console.log(this.selectedCategory);
  }

}
