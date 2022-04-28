import {Component, OnInit, QueryList, ViewChildren, Input, Output, EventEmitter} from '@angular/core';
import {first, map} from 'rxjs/operators';
import {ListKeyManager, ActiveDescendantKeyManager} from '@angular/cdk/a11y';

import {ListItemComponent} from './list-item.component';
import {DOWN_ARROW, ENTER, UP_ARROW} from "@angular/cdk/keycodes";
import {ArticleService} from "@app/providers/services/logistics/catalogue";


@Component({
    selector: 'app-autocomplete-articles',
    template: `
        <div class="users-page">
            <div class="users-page__main">
                <div class="input-group input-group-sm">
                    <input type="text" class="form-control form-control-sm"
                           (blur)="onBlur($event)"
                           [(ngModel)]="searchQuery" placeholder="Buscar artículo"
                           (keyup)="handleKeyUp($event)">
                </div>
                <div class="users-page__main__list">
                    <app-list-item *ngFor="let items of articles; let i = index"
                                   class="users-page__main__list__item"
                                   [item]="items"
                                   [index]="i"
                                   (itemSelected)="showUserInfo($event)">
                    </app-list-item>
                </div>
            </div>
        </div>
    `,
    styleUrls: ['autocomplete.component.scss']
})
export class AutocompleteArticlesComponent implements OnInit {

    articles = [];
    public searchCode: boolean;
    listKeyManager!: ListKeyManager<any>;
    searchQuery: string = '';

    @Input() set dataPatch(data: any) {
        if (data) {
            this.searchQuery = data;

        }
    }

    @Output() articleSelected = new EventEmitter();
    @ViewChildren(ListItemComponent) listItems!: QueryList<ListItemComponent>;
    index2 = 0;

    constructor(private articleService: ArticleService) {
        this.searchCode = true;
    }

    ngOnInit() {
    }

    showUserInfo(item: any) {
        if (item.id) {
            this.articleSelected.emit(item);
            this.articles = [];
        }
        this.searchQuery = '';
    }

    onBlur(event: any) {
        if (event.isTrusted) {
            const s = setTimeout(() => {
                this.articles = [];
                clearTimeout(s);
            }, 300);
        }
    }


    handleKeyUp(event: KeyboardEvent) {
        event.stopImmediatePropagation();
        if (this.listKeyManager) {
            if (event.keyCode === DOWN_ARROW || event.keyCode === UP_ARROW) {
                this.listKeyManager.onKeydown(event);
                return false;
            } else if (event.keyCode === ENTER && this.listKeyManager.activeItem) {
                this.listKeyManager.activeItem.selectItem();
                return false;
            }
        }
        if (this.searchQuery) {
            this.listData(this.searchQuery);
        } else {
            this.articles = [];
        }
    }

    public listData(textSearch: string) {
        this.searchCode = false;
        const params: any = {};
        params.name = textSearch;
        this.articleService.getAutocomple$(params)
            .pipe(first())
            .subscribe(res => {
                this.articles = res || [];
                this.listKeyManager = new ListKeyManager<any>(this.listItems);
                this.initKeyManagerHandlers();
            });
    }

    initKeyManagerHandlers() {
        this.listKeyManager
            .change
            .subscribe((activeIndex) => {
                this.listItems.map((item, index) => {
                    item.setActive(activeIndex === index);
                    return item;
                });
            });
    }

}

