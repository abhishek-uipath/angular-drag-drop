import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { LeftPanelModule } from './left-panel/left-panel.module';
import { CanvasModuleModule } from './canvas-module/canvas-module.module';

@NgModule({
    imports: [
        CommonModule,
        LeftPanelModule,
        CanvasModuleModule,
    ],
    declarations: [MainComponent],
    exports: [MainComponent],
})
export class MainModule { }
