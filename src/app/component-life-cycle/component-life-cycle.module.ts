import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CustomAttributeDirective } from './directives/custom-attribute.directive';

@NgModule({
  declarations: [ParentComponent, ChildComponent, CustomAttributeDirective],
  imports: [CommonModule],
  exports: [ParentComponent, ChildComponent],
})
export class ComponentLifeCycleModule {}
