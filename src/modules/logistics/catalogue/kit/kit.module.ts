import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {
    NgbModalModule,
    NgbDatepickerModule
} from '@ng-bootstrap/ng-bootstrap';

import {NavigationModule} from "@modules/navigation/navigation.module";
import {AppCommonModule} from "@common/app-common.module";
import {KitService, ArticleService} from "@app/providers/services/logistics/catalogue";
import {
    AutoCompleteModule,
    ConfirmDialogModule,
    FormsComponentValidModule
} from "../../../../shared";

import {KitEditComponent, KitListComponent, KitNewComponent} from "@modules/logistics/catalogue/kit/components";
import {KitRoutingModule, rutedComponents} from "@modules/logistics/catalogue/kit/kit-routing.module";



const SHARED_MODULES: any[] = [FormsComponentValidModule,
    ConfirmDialogModule, ConfirmDialogModule, AutoCompleteModule];

const COMPONENTS: any[] = [
    KitListComponent,
    KitNewComponent, KitEditComponent];

const SERVICES: any[] = [KitService];


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
        KitRoutingModule,
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
export class KitModule {
}
