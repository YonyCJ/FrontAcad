import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {
    NgbModalModule,
    NgbDatepickerModule
} from '@ng-bootstrap/ng-bootstrap';

import {NavigationModule} from "@modules/navigation/navigation.module";
import {AppCommonModule} from "@common/app-common.module";
import {MatriculaService} from "@app/providers/services/matricula/matricula/matricula.service";


import {
    MatriculaEditComponent,
    MatriculaListComponent,
    MatriculaNewComponent
} from "@modules/matricula/matricula/components";
import { MatriculaRoutingModule, rutedComponents } from './matricula-routing.module';
import {GradoService} from "@app/providers/services/configuracion/curso/grado.service";



const SHARED_MODULES: any[] = [];

const COMPONENTS: any[] = [
    MatriculaListComponent,
    MatriculaNewComponent, MatriculaEditComponent];

const SERVICES: any[] = [MatriculaService, GradoService];



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
        MatriculaRoutingModule,
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
export class MatriculaModule {
}
