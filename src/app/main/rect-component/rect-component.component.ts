import { Component, OnInit, ViewChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';


@Component({
    selector: 'app-rect-component',
    templateUrl: './rect-component.component.html',
    styleUrls: ['./rect-component.component.scss'],
    // encapsulation: ViewEncapsulation.ShadowDom,
})
export class RectComponentComponent implements OnInit {

    @Input()
    isStencil = 'false';

    @Input()
    id: string;

    constructor() { }

    @ViewChild('self', {static: true}) containerElement: ElementRef;

    ngOnInit() {
    }

    onDragStart(ev: DragEvent) {
        ev.stopPropagation();
        ev.dataTransfer.setData('name', 'rect-element');
        ev.dataTransfer.setData('new', this.isStencil);
        ev.dataTransfer.setData('delete_id', this.id );
        console.log(ev);
    }

    allowDrop(ev) {
        ev.preventDefault();
    }
    
    drop(ev) {
        console.log('rect drop');
        ev.preventDefault();
        ev.stopPropagation();
        const isNew = ev.dataTransfer.getData('new');
        let e: Element;

        if (isNew === 'true') {
            const data = ev.dataTransfer.getData('name');
            e = document.createElement(data);
            e.setAttribute('id', this.makeid(4));
        } else {
            const deleteid = ev.dataTransfer.getData('delete_id');
            e = document.querySelector(`#${deleteid}`);
        }
        this.containerElement.nativeElement.appendChild(e);
    }

    makeid(length) {
        let result = '';
        const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }

     getChildIds() {
        console.log(this.containerElement.nativeElement.children);
     }
}
