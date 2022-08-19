import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {
    NgbModalModule,
    NgbDatepickerModule
} from '@ng-bootstrap/ng-bootstrap';

import {NavigationModule} from "@modules/navigation/navigation.module";
import {AppCommonModule} from "@common/app-common.module";
import {GradoService} from "@app/providers/services/configuracion/curso/grado.service";


import {
    GradoEditComponent,
    GradoListComponent,
    GradoNewComponent
} from "@modules/configuracion/grado/components";
import { GradoRoutingModule, rutedComponents } from './grado-routing.module';



const SHARED_MODULES: any[] = [];

const COMPONENTS: any[] = [
    GradoListComponent,
    GradoNewComponent, GradoEditComponent];

const SERVICES: any[] = [GradoService];



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
        GradoRoutingModule,
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
export class GradoModule {
}
