import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ConfiguracionComponents } from "@modules/configuracion/configuracion.components";

const routes: Routes = [
    {
        path: '',
        component: ConfiguracionComponents,
        children: [{
            path: 'curso',

            loadChildren: () => import('./curso/curso.module').then(m => m.CursoModule),


        },
            {
                path: 'persona',

                loadChildren: () => import('./persona/persona.module').then(m => m.PersonaModule),


            },
            {
                path: 'grado',

                loadChildren: () => import('./grado/grado.module').then(m => m.GradoModule),


            }],


    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ConfiguracionRoutingModule {
}

