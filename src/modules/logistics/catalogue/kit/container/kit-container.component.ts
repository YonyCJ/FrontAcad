import {Component, OnInit} from '@angular/core';
import {CategoryService, KitService} from "@app/providers/services/logistics/catalogue";
import {Category} from "@modules/logistics/catalogue/category/models/category";
import {ActivatedRoute, Router} from "@angular/router";
import {Kit} from "@modules/logistics/catalogue/kit/models/kit";

@Component({
    selector: 'app-kit-containers',
    template: `
        <sb-layout-dashboard>
            <sb-dashboard-head title="Kit de Artículos" [hideBreadcrumbs]="false"></sb-dashboard-head>
            <sb-card>
                <div class="card-body">
                    <app-kit-list [kits]="kits" (eventNew)="eventNew($event)"
                                  (eventEdit)="eventEdit($event)"></app-kit-list>
                </div>
            </sb-card>
        </sb-layout-dashboard>`
})

export class KitContainerComponent implements OnInit {
    public kits: Kit[] = [];
    private error: string = '';

    constructor(private kitService: KitService,
                private router: Router,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.getKits();
    }

    public getKits(): void {
        this.kitService.getAll$().subscribe(response => {
            this.kits = response;
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
        this.router.navigate(['edit', {kitId: $event}], {relativeTo: this.activatedRoute});
    }
}
