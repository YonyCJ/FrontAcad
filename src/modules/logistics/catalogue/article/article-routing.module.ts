import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SBRouteData} from "@modules/navigation/models";
import {ArticleComponent} from "@modules/logistics/catalogue/article/article.component";
import {ArticleContainerComponent} from "@modules/logistics/catalogue/article/container/article-container.component";
import {ArticleEditComponent, ArticleNewComponent} from "@modules/logistics/catalogue/article/components";

const routes: Routes = [
    {
        path: '',
        component: ArticleComponent,
        children: [
            {
                path: '',
                component: ArticleContainerComponent,
                data: {
                    title: 'Artículos',
                    breadcrumbs: [
                        {
                            text: 'Dashboard',
                            link: '/dashboard',
                        },
                        {
                            text: 'Artículos',
                            active: true,
                        },
                    ],
                } as SBRouteData,
            },
            {
                path: 'new',
                component: ArticleNewComponent,
                data: {
                    title: 'Artículos',
                    breadcrumbs: [
                        {
                            text: 'Dashboard',
                            link: '/dashboard',
                        },
                        {
                            text: 'Artículos',
                            active: true,
                        },
                    ],
                } as SBRouteData,
            },
            {
                path: 'edit',
                component: ArticleEditComponent,
                data: {
                    title: 'Artículos',
                    breadcrumbs: [
                        {
                            text: 'Dashboard',
                            link: '/dashboard',
                        },
                        {
                            text: 'Artículos',
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
export class ArticleRoutingModule {
}

export const rutedComponents = [
    ArticleContainerComponent,
    ArticleComponent,
];
