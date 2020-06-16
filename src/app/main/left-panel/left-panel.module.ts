import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LeftPanelComponent } from './left-panel.component';
import { RectComponentModule } from '../rect-component/rect-component.module';

@NgModule({
    imports: [
        CommonModule,
        DragDropModule,
        RectComponentModule,
    ],
    declarations: [LeftPanelComponent],
    exports: [LeftPanelComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LeftPanelModule { }
