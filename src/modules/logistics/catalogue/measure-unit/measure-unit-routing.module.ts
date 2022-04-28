import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SBRouteData} from "@modules/navigation/models";
import {
    MeasureUnitContainerComponent
} from "@modules/logistics/catalogue/measure-unit/container/measure-unit-container.component";
import {MeasureUnitComponent} from "@modules/logistics/catalogue/measure-unit/measure-unit.component";
import {MeasureUnitEditComponent, MeasureUnitNewComponent} from "@modules/logistics/catalogue/measure-unit/components";

const routes: Routes = [
    {
        path: '',
        component: MeasureUnitComponent,
        children: [
            {
                path: '',
                component: MeasureUnitContainerComponent,
                data: {
                    title: 'Unidades de medida',
                    breadcrumbs: [
                        {
                            text: 'Dashboard',
                            link: '/dashboard',
                        },
                        {
                            text: 'Unidad de medida',
                            active: true,
                        },
                    ],
                } as SBRouteData,
            },
            {
                path: 'new',
                component: MeasureUnitNewComponent,
                data: {
                    title: 'Unidades de medida',
                    breadcrumbs: [
                        {
                            text: 'Dashboard',
                            link: '/dashboard',
                        },
                        {
                            text: 'Unidad de medida',
                            active: true,
                        },
                    ],
                } as SBRouteData,
            },
            {
                path: 'edit',
                component: MeasureUnitEditComponent,
                data: {
                    title: 'Unidades de medida',
                    breadcrumbs: [
                        {
                            text: 'Dashboard',
                            link: '/dashboard',
                        },
                        {
                            text: 'Unidad de medida',
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
export class MeasureUnitRoutingModule {
}

export const rutedComponents = [
    MeasureUnitContainerComponent,
    MeasureUnitComponent,
];
