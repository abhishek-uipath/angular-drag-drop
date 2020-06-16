import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RectComponentComponent } from './rect-component.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    CommonModule,
    DragDropModule,
  ],
  declarations: [RectComponentComponent],
  exports: [RectComponentComponent]
})
export class RectComponentModule { }
