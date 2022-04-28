import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CategoryComponent} from "@modules/logistics/catalogue/category/category.component";
import {CategoryContainerComponent} from "@modules/logistics/catalogue/category/container/category-container.component";
import {SBRouteData} from "@modules/navigation/models";
import {CategoryEditComponent, CategoryNewComponent} from "@modules/logistics/catalogue/category/components";

const routes: Routes = [
    {
        path: '',
        component: CategoryComponent,
        children: [
            {
                path: '',
                component: CategoryContainerComponent,
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
                component: CategoryNewComponent,
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
                component: CategoryEditComponent,
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
export class CategoryRoutingModule {
}

export const rutedComponents = [
    CategoryContainerComponent,
    CategoryComponent,
];
