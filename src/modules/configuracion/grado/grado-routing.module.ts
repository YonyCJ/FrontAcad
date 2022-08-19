import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import {SBRouteData} from "@modules/navigation/models";

import { PersonaComponent } from './persona.component';
import { PersonaContainerComponent } from './container/persona-container.component';
import { PersonaEditComponent, PersonaNewComponent } from './components';

const routes: Routes = [
    {
        path: '',
        component: PersonaComponent,
        children: [
            {
                path: '',
                component: PersonaContainerComponent,
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
                component: PersonaNewComponent,
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
                component: PersonaEditComponent,
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
export class PersonaRoutingModule {
}

export const rutedComponents = [
    PersonaContainerComponent,
    PersonaComponent,
];
