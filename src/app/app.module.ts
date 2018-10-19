import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';

import { ProductService } from './products/products.service';
import { CategoriesService } from './categories/categories.service';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CategoriesComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
    providers: [ProductService, CategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
