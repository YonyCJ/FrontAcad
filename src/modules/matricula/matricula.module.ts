import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ConfiguracionRoutingModule} from "@modules/configuracion/configuracion-routing.module";
import { ConfiguracionComponents } from './configuracion.components';

@NgModule({
    imports: [
        CommonModule,
        ConfiguracionRoutingModule
    ],
    declarations: [ConfiguracionComponents],
})
export class ConfiguracionModule {
}
