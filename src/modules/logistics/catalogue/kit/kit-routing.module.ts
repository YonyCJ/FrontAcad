import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SBRouteData} from "@modules/navigation/models";
import {KitComponent} from "@modules/logistics/catalogue/kit/kit.component";
import {KitContainerComponent} from "@modules/logistics/catalogue/kit/container/kit-container.component";
import {KitEditComponent, KitNewComponent} from "@modules/logistics/catalogue/kit/components";

const routes: Routes = [
    {
        path: '',
        component: KitComponent,
        children: [
            {
                path: '',
                component: KitContainerComponent,
                data: {
                    title: 'Categorias de artículos',
                    breadcrumbs: [
                        {
                            text: 'Dashboard',
                            link: '/dashboard',
                        },
                        {
                            text: 'Kit',
                            active: true,
                        },
                    ],
                } as SBRouteData,
            },
            {
                path: 'new',
                component: KitNewComponent,
                data: {
                    title: 'Categorias de artículos',
                    breadcrumbs: [
                        {
                            text: 'Dashboard',
                            link: '/dashboard',
                        },
                        {
                            text: 'kit',
                            active: true,
                        },
                    ],
                } as SBRouteData,
            },
            {
                path: 'edit',
                component: KitEditComponent,
                data: {
                    title: 'Categorias de artículos',
                    breadcrumbs: [
                        {
                            text: 'Dashboard',
                            link: '/dashboard',
                        },
                        {
                            text: 'kit',
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
export class KitRoutingModule {
}

export const rutedComponents = [
    KitContainerComponent,
    KitComponent,
];
