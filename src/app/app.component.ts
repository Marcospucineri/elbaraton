import { Component } from '@angular/core';
import { Category } from './categories/category.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  selectedCategory: number;

  onSelectedCategory(category:Category){
    this.selectedCategory = category.id;
  }
}
