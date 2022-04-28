import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
})
export class PaginationComponent implements OnInit {
    page = 1;
    perpages = [
        {id: 10, active: true},
        {id: 30, active: false},
        {id: 50, active: false},
        {id: 100, active: false},
    ];
    pageNumber: number = 1;
    size: number = 10;
    @Input() pagination!: Pagination;
    @Input() isDisabled!: boolean;
    @Output() eventPaginate = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    changeValuePage($event: any) {
        this.size = parseInt($event.value);

        this.eventPaginate.emit({
            pageNumber: 1,
            size: this.size,
        });
    }

    public loadPage($event: number) {
        this.pageNumber = $event;
        this.eventPaginate.emit({
            pageNumber: this.pageNumber,
            size: this.size,
        });
    }

}

export interface Sort {
    sorted?: boolean;
    unsorted?: boolean;
    empty?: boolean;
}

export interface Pageable {
    sort?: Sort;
    offset?: number,
    pageSize?: number,
    pageNumber?: number,
    paged?: boolean,
    unpaged?: boolean
}

export interface Pagination {
    content?: [];
    pageable?: Pageable;
    totalElements?: number;
    last?: boolean;
    totalPages?: number;
    number?: number;
    size?: number;
    sort?: Sort;
    numberOfElements?: number;
    first?: boolean;
    empty?: boolean;
}

