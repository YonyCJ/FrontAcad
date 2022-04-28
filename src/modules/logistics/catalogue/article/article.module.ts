import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgbDatepickerModule, NgbModalModule} from '@ng-bootstrap/ng-bootstrap';

import {NavigationModule} from "@modules/navigation/navigation.module";
import {AppCommonModule} from "@common/app-common.module";

import {ConfirmDialogModule, FormsComponentValidModule, PaginationModule} from "../../../../shared";


import {ArticleService, ArticleTypeService, CategoryService} from "@app/providers/services/logistics/catalogue";
import {
    ArticleEditComponent,
    ArticleFilterComponent,
    ArticleListComponent,
    ArticleNewComponent
} from "@modules/logistics/catalogue/article/components";
import {ArticleRoutingModule, rutedComponents} from "@modules/logistics/catalogue/article/article-routing.module";


const SHARED_MODULES: any[] = [FormsComponentValidModule,
    ConfirmDialogModule,
    PaginationModule];

const COMPONENTS: any[] = [
    ArticleListComponent, ArticleNewComponent, ArticleEditComponent, ArticleFilterComponent
];

const SERVICES: any[] = [ArticleTypeService, ArticleService, CategoryService];


const NG_MODULES: any = [];

const NGB_MODULES: any = [
    NgbModalModule,
    NgbDatepickerModule,
    NavigationModule,
    AppCommonModule

];
const PIPES: any = [];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ArticleRoutingModule,
        ...SHARED_MODULES,
        ...NG_MODULES,
        ...NGB_MODULES,
    ],
    declarations: [
        ...COMPONENTS,
        ...rutedComponents,
        ...PIPES,
    ],
    providers: [
        ...SERVICES,
    ],
    entryComponents: [],
})
export class ArticleModule {
}
