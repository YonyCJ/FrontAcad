import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MeasureUnit} from "@modules/logistics/catalogue/measure-unit/models/measure-unit";
import {MeasureUnitService} from "@app/providers/services/logistics/catalogue";


@Component({
    selector: 'app-measure-unit-containers',
    template: `
        <sb-layout-dashboard>
            <sb-dashboard-head title="Unidades de Medida" [hideBreadcrumbs]="false"></sb-dashboard-head>
            <sb-card>
                <div class="card-body">
                    <app-measure-unit-list [measureUnits]="measureUnits" (eventNew)="eventNew($event)"
                                       (eventEdit)="eventEdit($event)"></app-measure-unit-list>
                </div>
            </sb-card>
        </sb-layout-dashboard>`
})

export class MeasureUnitContainerComponent implements OnInit {

    public measureUnits: MeasureUnit[] = [];
    private error: string = '';

    constructor(private measureUnitService: MeasureUnitService,
                private router: Router,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.getMeasureUnits();

    }

    public getMeasureUnits(): void {
        this.measureUnitService.getAll$().subscribe(response => {
            this.measureUnits = response;
        }, error => {
            this.error = error;
        });
    }

    public eventNew($event: boolean): void {
        if ($event) {
            this.router.navigate(['new'], {relativeTo: this.activatedRoute});
        }

    }

    public eventEdit($event: number): void {
        this.router.navigate(['edit', {measureUnitId: $event}], {relativeTo: this.activatedRoute});
    }
}
