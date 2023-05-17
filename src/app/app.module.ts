//modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { RoutingDemoModule } from './routing-demo/routing-demo.module';
import { ComponentLifeCycleModule } from './component-life-cycle/component-life-cycle.module';
import { CommonErrorModule } from './common-error/common-error.module';
import { AppRoutingModule } from './app.routing-module';
import { FormDemoModule } from './form-demo/form-demo.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormDemoModule } from './reactive-form-demo/reactive-form-demo.module';
import { HttpDemoModule } from './http-demo/http-demo.module';
import { PipeDemoModule } from './pipe-demo/pipe-demo.module';
import { RxjsOperatorsDemoModule } from './rxjs-operators-demo/rxjs-operators-demo.module';

// interceptors
import { JwtInterceptorInterceptor } from './routing-demo/interceptor/jwt-interceptor.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

//components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorInterceptor, multi: true
  }],
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
    ReactiveFormDemoModule,
    ReactiveFormsModule,
    HttpDemoModule,
    PipeDemoModule,
    RxjsOperatorsDemoModule
  ],
})
export class AppModule { }
