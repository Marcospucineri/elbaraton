import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Category } from './category.model';
import { CategoriesService } from './categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.less']
})
export class CategoriesComponent implements OnInit {
  @Output() selectedCategory = new EventEmitter<Category>();

  categories:Category[] = [];

  constructor(public categoriesSrv: CategoriesService) { }

  ngOnInit() {
    this.categories = this.categoriesSrv.getCategories();
  }

  onSelectCategory(category: Category) {
    console.log(category)
    this.selectedCategory.emit(category);//Implement category selection
  }

}
