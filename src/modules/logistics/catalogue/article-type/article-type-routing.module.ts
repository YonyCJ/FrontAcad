import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SBRouteData} from "@modules/navigation/models";
import {ArticleTypeComponent} from "@modules/logistics/catalogue/article-type/article-type.component";
import {
    ArticleTypeContainerComponent
} from "@modules/logistics/catalogue/article-type/container/article-type-container.component";
import {ArticleTypeEditComponent, ArticleTypeNewComponent} from "@modules/logistics/catalogue/article-type/components";

const routes: Routes = [
    {
        path: '',
        component: ArticleTypeComponent,
        children: [
            {
                path: '',
                component: ArticleTypeContainerComponent,
                data: {
                    title: 'Tipo de artículos',
                    breadcrumbs: [
                        {
                            text: 'Dashboard',
                            link: '/dashboard',
                        },
                        {
                            text: 'Tipo de artículos',
                            active: true,
                        },
                    ],
                } as SBRouteData,
            },
            {
                path: 'new',
                component: ArticleTypeNewComponent,
                data: {
                    title: 'Tipo de artículos',
                    breadcrumbs: [
                        {
                            text: 'Dashboard',
                            link: '/dashboard',
                        },
                        {
                            text: 'Tipo de artículos',
                            active: true,
                        },
                    ],
                } as SBRouteData,
            },
            {
                path: 'edit',
                component: ArticleTypeEditComponent,
                data: {
                    title: 'Tipo de artículos',
                    breadcrumbs: [
                        {
                            text: 'Dashboard',
                            link: '/dashboard',
                        },
                        {
                            text: 'Tipo de artículos',
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
export class ArticleTypeRoutingModule {
}

export const rutedComponents = [
    ArticleTypeContainerComponent,
    ArticleTypeComponent,
];
