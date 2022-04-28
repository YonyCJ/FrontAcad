import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CatalogueComponents} from "@modules/logistics/catalogue/catalogue.components";

const routes: Routes = [
    {
        path: '',
        component: CatalogueComponents,
        children: [{
            path: 'category',
            loadChildren: () => import('./category/category.module').then(m => m.CategoryModule),
        },
            {
                path: 'measure-unit',
                loadChildren: () => import('./measure-unit/measure-unit.module').then(m => m.MeasureUnitModule),
            },
            {
                path: 'article-type',
                loadChildren: () => import('./article-type/article-type.module').then(m => m.ArticleTypeModule),
            },
            {
                path: 'article',
                loadChildren: () => import('./article/article.module').then(m => m.ArticleModule),
            },
            {
                path: 'kit',
                loadChildren: () => import('./kit/kit.module').then(m => m.KitModule),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CatalogueRoutingModule {
}

