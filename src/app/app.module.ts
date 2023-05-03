//modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { RoutingDemoModule } from './routing-demo/routing-demo.module';
import { ComponentLifeCycleModule } from './component-life-cycle/component-life-cycle.module';
import { CommonErrorModule } from './common-error/common-error.module';
import { RouterModule, Routes } from '@angular/router';

//components
import { AppComponent } from './app.component';
import { HomeComponent } from './routing-demo/home/home.component';
import { ProductsComponent } from './routing-demo/products/products.component';
import { AccountComponent } from './routing-demo/account/account.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'accounts', component: AccountComponent },
];

@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    CommonErrorModule,
    ComponentLifeCycleModule,
    RoutingDemoModule,
    RouterModule.forRoot(appRoutes),
  ],
})
export class AppModule {}
