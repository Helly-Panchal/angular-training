import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { PercentagePipe } from './custome-pipe/percentage.pipe';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './custome-pipe/filter.pipe';

@NgModule({
  declarations: [
    PipeExampleComponent,
    PercentagePipe,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PipeExampleComponent
  ]
})
export class PipeDemoModule { }
