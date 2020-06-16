import { Component, OnInit, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { RectComponentComponent } from '../rect-component/rect-component.component';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {

  constructor(injector: Injector) {
    // Convert `PopupComponent` to a custom element.
    const RectElement = createCustomElement(RectComponentComponent, {injector});
    // Register the custom element with the browser.
    customElements.define('rect-element', RectElement);
  }

  ngOnInit() {
  }

}
