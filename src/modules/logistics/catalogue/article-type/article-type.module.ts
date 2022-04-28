import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgbDatepickerModule, NgbModalModule} from '@ng-bootstrap/ng-bootstrap';

import {NavigationModule} from "@modules/navigation/navigation.module";
import {AppCommonModule} from "@common/app-common.module";

import {ConfirmDialogModule, FormsComponentValidModule} from "../../../../shared";

import {
    ArticleTypeRoutingModule,
    rutedComponents
} from "@modules/logistics/catalogue/article-type/article-type-routing.module";
import {
    ArticleTypeEditComponent,
    ArticleTypeListComponent,
    ArticleTypeNewComponent
} from "@modules/logistics/catalogue/article-type/components";
import {ArticleTypeService} from "@app/providers/services/logistics/catalogue";


const SHARED_MODULES: any[] = [FormsComponentValidModule,
    ConfirmDialogModule, ConfirmDialogModule];

const COMPONENTS: any[] = [
    ArticleTypeListComponent, ArticleTypeNewComponent, ArticleTypeEditComponent
];

const SERVICES: any[] = [ArticleTypeService];


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
        ArticleTypeRoutingModule,
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
    exports: [
        ArticleTypeListComponent
    ]
})
export class ArticleTypeModule {
}
