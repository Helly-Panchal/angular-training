//modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { RoutingDemoModule } from './routing-demo/routing-demo.module';
import { ComponentLifeCycleModule } from './component-life-cycle/component-life-cycle.module';
import { CommonErrorModule } from './common-error/common-error.module';
import { AppRoutingModule } from './app.routing-module';

//components
import { AppComponent } from './app.component';

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
    AppRoutingModule,
  ],
})
export class AppModule {}
