//modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { HomeComponent } from './routing-demo/home/home.component';
import { ProductsComponent } from './routing-demo/products/products.component';
import { AccountComponent } from './routing-demo/account/account.component';
import { ProductsDetailsComponent } from './routing-demo/products/products-details/products-details.component';
import { PageNotFoundComponent } from './routing-demo/page-not-found/page-not-found.component';
import { LoginComponent } from './routing-demo/login/login.component';
import { DashboardComponent } from './routing-demo/dashboard/dashboard.component';

const appRoutes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      {
        path: 'products',
        component: ProductsComponent,
        children: [
          {
            path: ':productId/:productName',
            component: ProductsDetailsComponent,
          },
        ],
      },
      { path: 'accounts', component: AccountComponent },]
  },

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
