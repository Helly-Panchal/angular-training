//modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';

//components
import { AppComponent } from './app.component';
import { CommonErrorModule } from './common-error/common-error.module';
import { ComponentLifeCycleModule } from './component-life-cycle/component-life-cycle.module';

@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    CommonErrorModule,
    ComponentLifeCycleModule,
  ],
})
export class AppModule {}
