//modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { RoutingDemoModule } from './routing-demo/routing-demo.module';
import { ComponentLifeCycleModule } from './component-life-cycle/component-life-cycle.module';
import { CommonErrorModule } from './common-error/common-error.module';
import { AppRoutingModule } from './app.routing-module';
import { FormDemoModule } from './form-demo/form-demo.module';
import { FormsModule } from '@angular/forms';

//components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    CommonErrorModule,
    ComponentLifeCycleModule,
    RoutingDemoModule,
    AppRoutingModule,
    FormDemoModule,
  ],
})
export class AppModule {}
