import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AccountComponent } from './account/account.component';
import { RouterModule } from '@angular/router';
import { ProductsDetailsComponent } from './products/products-details/products-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [HomeComponent, ProductsComponent, AccountComponent, ProductsDetailsComponent, PageNotFoundComponent, LoginComponent],
  imports: [CommonModule, RouterModule],
  exports: [HomeComponent, ProductsComponent, AccountComponent],
})
export class RoutingDemoModule {}
