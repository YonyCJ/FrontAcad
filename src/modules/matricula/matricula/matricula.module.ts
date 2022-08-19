import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {
    NgbModalModule,
    NgbDatepickerModule
} from '@ng-bootstrap/ng-bootstrap';

import {NavigationModule} from "@modules/navigation/navigation.module";
import {AppCommonModule} from "@common/app-common.module";
import {CursoService} from "@app/providers/services/configuracion/curso";


import {
    CursoEditComponent,
    CursoListComponent,
    CursoNewComponent
} from "@modules/configuracion/curso/components";
import { CursoRoutingModule, rutedComponents } from './curso-routing.module';
import {GradoService} from "@app/providers/services/configuracion/curso/grado.service";
import {PersonaService} from "@app/providers/services/configuracion/curso/persona.service";


const SHARED_MODULES: any[] = [];

const COMPONENTS: any[] = [
    CursoListComponent,
    CursoNewComponent, CursoEditComponent];

const SERVICES: any[] = [CursoService, GradoService,PersonaService];



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
        CursoRoutingModule,
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
export class CursoModule {
}
