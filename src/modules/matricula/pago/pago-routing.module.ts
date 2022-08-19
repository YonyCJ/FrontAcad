import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import {SBRouteData} from "@modules/navigation/models";

import { MatriculaComponent } from './matricula.component';
import { PagoContainerComponent } from './container/pago-container.component';
import { PagoEditComponent, PagoNewComponent } from './components';

const routes: Routes = [
    {
        path: '',
        component: MatriculaComponent,
        children: [
            {
                path: '',
                component: PagoContainerComponent,
                data: {
                    title: 'Categorias de artículos',
                    breadcrumbs: [
                        {
                            text: 'Dashboard',
                            link: '/dashboard',
                        },
                        {
                            text: 'Categoria',
                            active: true,
                        },
                    ],
                } as SBRouteData,
            },
            {
                path: 'new',
                component: PagoNewComponent,
                data: {
                    title: 'Categorias de artículos',
                    breadcrumbs: [
                        {
                            text: 'Dashboard',
                            link: '/dashboard',
                        },
                        {
                            text: 'Categoria',
                            active: true,
                        },
                    ],
                } as SBRouteData,
            },
            {
                path: 'edit',
                component: PagoEditComponent,
                data: {
                    title: 'Categorias de artículos',
                    breadcrumbs: [
                        {
                            text: 'Dashboard',
                            link: '/dashboard',
                        },
                        {
                            text: 'Categoria',
                            active: true,
                        },
                    ],
                } as SBRouteData,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MatriculaRoutingModule {
}

export const rutedComponents = [
    PagoContainerComponent,
    MatriculaComponent,
];
