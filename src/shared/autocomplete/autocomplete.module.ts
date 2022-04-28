/*
 * @example
 *
 *AutoComplete
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListItemComponent} from './articles-simple/list-item.component';
import {FormsModule} from '@angular/forms';
import {AutocompleteArticlesComponent} from './articles-simple/autocomplete-articles.component';
import {ArticleService} from "@app/providers/services/logistics/catalogue";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [
        AutocompleteArticlesComponent, ListItemComponent,
    ],
    declarations: [
        AutocompleteArticlesComponent, ListItemComponent,

    ],
    providers: [
        ArticleService,
    ],
})
export class AutoCompleteModule {
}
