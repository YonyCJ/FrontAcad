import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgbDatepickerModule, NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {NavigationModule} from "@modules/navigation/navigation.module";
import {AppCommonModule} from "@common/app-common.module";
import {ConfirmDialogModule, FormsComponentValidModule} from "../../../../shared";
import {
    MeasureUnitEditComponent,
    MeasureUnitListComponent,
    MeasureUnitNewComponent
} from "@modules/logistics/catalogue/measure-unit/components";

import {
    MeasureUnitRoutingModule,
    rutedComponents
} from "@modules/logistics/catalogue/measure-unit/measure-unit-routing.module";
import {MeasureUnitService} from "@app/providers/services/logistics/catalogue";


const SHARED_MODULES: any[] = [FormsComponentValidModule,
    ConfirmDialogModule, ConfirmDialogModule];

const COMPONENTS: any[] = [
    MeasureUnitListComponent,
    MeasureUnitNewComponent,
    MeasureUnitEditComponent
];

const SERVICES: any[] = [MeasureUnitService];


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
        MeasureUnitRoutingModule,
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
export class MeasureUnitModule {
}
