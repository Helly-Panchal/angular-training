import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { PercentagePipe } from './custome-pipe/percentage.pipe';



@NgModule({
  declarations: [
    PipeExampleComponent,
    PercentagePipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PipeExampleComponent
  ]
})
export class PipeDemoModule { }
