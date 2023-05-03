import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [HomeComponent, ProductsComponent, AccountComponent],
  imports: [CommonModule],
  exports: [HomeComponent, ProductsComponent, AccountComponent],
})
export class RoutingDemoModule {}
