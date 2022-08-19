import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import {SBRouteData} from "@modules/navigation/models";

import { CurriculaComponent } from './curricula.component';
import { GradoContainerComponent } from './container/grado-container.component';
import { GradoEditComponent, GradoNewComponent } from './components';

const routes: Routes = [
    {
        path: '',
        component: CurriculaComponent,
        children: [
            {
                path: '',
                component: GradoContainerComponent,
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
                component: GradoNewComponent,
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
                component: GradoEditComponent,
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
export class GradoRoutingModule {
}

export const rutedComponents = [
    GradoContainerComponent,
    CurriculaComponent,
];
