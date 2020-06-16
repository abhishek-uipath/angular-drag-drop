import { Component, OnInit, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatList } from '@angular/material/list';
import { CdkDragStart, CdkDragMove, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-canvas-module',
    templateUrl: './canvas-module.component.html',
    styleUrls: ['./canvas-module.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class CanvasModuleComponent implements OnInit {

    constructor() { }

    @ViewChild(MatList, { read: ElementRef }) child: ElementRef;
    
    @ViewChild('container', {static: true}) containerElement: ElementRef;

    _currentIndex: number;
    _currentField: any;

    types = [
        'boolean',
        'string',
        'text',
        'user'
    ];

    fields: string[] = [];

    ngOnInit() {
    }

    dragStart(event: CdkDragStart) {
        console.log('CdkDragStart:', event);
        this._currentIndex = this.types.indexOf(event.source.data); // Get index of dragged type
        this._currentField = this.child.nativeElement.children[this._currentIndex]; // Store HTML field
    }

    moved(event: CdkDragMove) {
        // console.log('CdkDragMove:', event);
        // Check if stored HTML field is as same as current field
        if (this.child.nativeElement.children[this._currentIndex] !== this._currentField) {
            // Replace current field, basically replaces placeholder with old HTML content
            this.child.nativeElement.replaceChild(this._currentField, this.child.nativeElement.children[this._currentIndex]);
        }
    }

    itemDropped(event: CdkDragDrop<any[]>) {
        console.log('CdkDragDrop', event);
        if (event.previousContainer === event.container) {
            moveItemInArray(this.fields, event.previousIndex, event.currentIndex);
        } else {
            this.addField(event.item.data, event.currentIndex);
        }
    }

    addField(fieldType: string, index: number) {
        this.fields.splice(index, 0, fieldType);
    }

    trackByIndex = (index: number, obj: object): number => {
        return index;
    }

    allowDrop(ev) {
        ev.preventDefault();
        ev.stopPropagation();
    }
    
    drop(ev) {
        console.log('canvas drop');
        ev.preventDefault();
        ev.stopPropagation();
        const isNew = ev.dataTransfer.getData('new');
        console.log(isNew);
        console.log(isNew === 'true');
        let e: Element;

        if (isNew === 'true') {
            const data = ev.dataTransfer.getData('name');
            e = document.createElement(data);
            e.setAttribute('id', this.makeid(4));
            e.setAttribute('stencil', 'false');
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

}
