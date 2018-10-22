import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { TreeViewComponent } from './treeview/treeview.component';

import { ProductService } from './products/products.service';
import { CategoriesService } from './categories/categories.service';
import { CartService } from './cart/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CategoriesComponent,
    ProductsComponent,
    TreeViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
    providers: [ProductService,
                CategoriesService,
                CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
