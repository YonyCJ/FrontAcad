import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {
    NgbModalModule,
    NgbDatepickerModule
} from '@ng-bootstrap/ng-bootstrap';
import {CategoryRoutingModule, rutedComponents} from "@modules/logistics/catalogue/category/category-routing.module";
import {NavigationModule} from "@modules/navigation/navigation.module";
import {AppCommonModule} from "@common/app-common.module";
import {CategoryService} from "@app/providers/services/logistics/catalogue";

import {
    ConfirmDialogModule,
    FormsComponentValidModule
} from "../../../../shared";
import {
    CategoryEditComponent,
    CategoryListComponent,
    CategoryNewComponent
} from "@modules/logistics/catalogue/category/components";


const SHARED_MODULES: any[] = [FormsComponentValidModule,
    ConfirmDialogModule,ConfirmDialogModule];

const COMPONENTS: any[] = [
    CategoryListComponent,
    CategoryNewComponent, CategoryEditComponent];

const SERVICES: any[] = [CategoryService];



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
        CategoryRoutingModule,
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
export class CategoryModule {
}
