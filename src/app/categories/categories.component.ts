import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Category } from './category.model';
import { CategoriesService } from './categories.service';
import { TreeViewComponent } from '../treeview/treeview.component';

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

  onSelectedItem(category:Category){
    this.selectedCategory.emit(category)
  }

}
