import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CatalogueComponents} from "@modules/logistics/catalogue/catalogue.components";
import {CatalogueRoutingModule} from "@modules/logistics/catalogue/catalogue-routing.module";


@NgModule({
    imports: [
        CommonModule,
        CatalogueRoutingModule

    ],
    declarations: [CatalogueComponents],
})
export class CatalogueModule {
}
