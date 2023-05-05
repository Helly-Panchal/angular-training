//modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { HomeComponent } from './routing-demo/home/home.component';
import { ProductsComponent } from './routing-demo/products/products.component';
import { AccountComponent } from './routing-demo/account/account.component';
import { ProductsDetailsComponent } from './routing-demo/products/products-details/products-details.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'accounts', component: AccountComponent },
  {
    path: 'products/:productId/:productName',
    component: ProductsDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
