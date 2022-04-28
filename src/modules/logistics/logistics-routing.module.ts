import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LogisticsComponents} from "@modules/logistics/logistics.components";

const routes: Routes = [
    {
        path: '',
        component: LogisticsComponents,
        children: [{
            path: 'catalogue',
            loadChildren: () => import('./catalogue/catalogue.module').then(m => m.CatalogueModule),
        }],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LogisticsRoutingModule {
}

