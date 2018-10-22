import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../categories/category.model';

@Component({
  selector: "tree-view",
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.less']
})
export class TreeViewComponent {
  @Input('data') items: Category[];
  @Output() selectItem = new EventEmitter<Category>();

  ngOnInit() {
  }

  onSelectItem(category:Category) {
    this.selectItem.emit(category);
  }
}
