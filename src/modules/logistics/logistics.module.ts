import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LogisticsComponents} from "@modules/logistics/logistics.components";
import {LogisticsRoutingModule} from "@modules/logistics/logistics-routing.module";

@NgModule({
    imports: [
        CommonModule,
        LogisticsRoutingModule
    ],
    declarations: [LogisticsComponents],
})
export class LogisticsModule {
}
