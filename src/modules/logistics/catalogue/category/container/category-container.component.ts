import {Component, OnInit} from '@angular/core';
import {CategoryService} from "@app/providers/services/logistics/catalogue";
import {Category} from "@modules/logistics/catalogue/category/models/category";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-category-containers',
    template: `
        <sb-layout-dashboard>
            <sb-dashboard-head title="Categorias de Artículos" [hideBreadcrumbs]="false"></sb-dashboard-head>
            <sb-card>
                <div class="card-body">
                    <app-category-list [categorys]="categorys" (eventNew)="eventNew($event)"
                                       (eventEdit)="eventEdit($event)"></app-category-list>
                </div>
            </sb-card>
        </sb-layout-dashboard>`
})

export class CategoryContainerComponent implements OnInit {
    public categorys: Category[] = [];
    private error: string = '';

    constructor(private categoryService: CategoryService,
                private router: Router,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.getCategorys();
    }

    public getCategorys(): void {
        this.categoryService.getAll$().subscribe(response => {
            this.categorys = response;
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
        this.router.navigate(['edit', {categoryId: $event}], {relativeTo: this.activatedRoute});
    }
}
