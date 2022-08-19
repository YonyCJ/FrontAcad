import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {
    NgbModalModule,
    NgbDatepickerModule
} from '@ng-bootstrap/ng-bootstrap';

import {NavigationModule} from "@modules/navigation/navigation.module";
import {AppCommonModule} from "@common/app-common.module";
import {PersonaService} from "@app/providers/services/configuracion/curso/persona.service";


import {
    PersonaEditComponent,
    PersonaListComponent,
    PersonaNewComponent
} from "@modules/configuracion/persona/components";
import { PersonaRoutingModule, rutedComponents } from './persona-routing.module';
import {UserService} from "@app/providers/services/configuracion/curso/user.service";
import {RolService} from "@app/providers/services/configuracion/curso/rol.service";


const SHARED_MODULES: any[] = [];

const COMPONENTS: any[] = [
    PersonaListComponent,
    PersonaNewComponent, PersonaEditComponent];

const SERVICES: any[] = [PersonaService, UserService,RolService];



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
        PersonaRoutingModule,
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
export class PersonaModule {
}
