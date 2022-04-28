import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-list-item',
    templateUrl: 'list-item.component.html',
    styleUrls: ['list-item.component.scss'],
})
export class ListItemComponent implements OnInit, AfterViewInit {
    @Input() item: any;
    @Input() index: any;
    @Output() itemSelected = new EventEmitter();
    _isActive: boolean = false;

    constructor() {
    }

    ngOnInit() {

        this._isActive = false;
    }

    ngAfterViewInit() {
    }

    setActive(val: any) {
        this._isActive = val;
    }

    selectItem() {
        this._isActive = true;
        this.itemSelected.emit(this.item);

    }

}
