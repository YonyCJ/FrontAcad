import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import {SBRouteData} from "@modules/navigation/models";

import { CursoComponent } from './curso.component';
import { CursoContainerComponent } from './container/curso-container.component';
import { MatriculaEditComponent, MatriculaNewComponent } from './components';

const routes: Routes = [
    {
        path: '',
        component: CursoComponent,
        children: [
            {
                path: '',
                component: CursoContainerComponent,
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
                component: MatriculaNewComponent,
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
                component: MatriculaEditComponent,
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
export class CursoRoutingModule {
}

export const rutedComponents = [
    CursoContainerComponent,
    CursoComponent,
];
