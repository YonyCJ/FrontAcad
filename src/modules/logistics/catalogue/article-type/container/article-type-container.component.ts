import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ArticleType} from "@modules/logistics/catalogue/article-type/models/article-type";
import {ArticleTypeService} from "@app/providers/services/logistics/catalogue";


@Component({
    selector: 'app-article-type-containers',
    template: `
        <sb-layout-dashboard>
            <sb-dashboard-head title="Tipo de Artículos" [hideBreadcrumbs]="false"></sb-dashboard-head>
            <sb-card>
                <div class="card-body">
                    <app-article-type-list [articleTypes]="articleTypes" (eventNew)="eventNew($event)"
                                           (eventEdit)="eventEdit($event)"></app-article-type-list>
                </div>
            </sb-card>
        </sb-layout-dashboard>`
})

export class ArticleTypeContainerComponent implements OnInit {
    public articleTypes: ArticleType[] = [];
    private error: string = '';

    constructor(private articleTypeService: ArticleTypeService,
                private router: Router,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.getArticleTypes();

    }

    public getArticleTypes(): void {
        this.articleTypeService.getAll$().subscribe(response => {
            this.articleTypes = response;
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
        this.router.navigate(['edit', {articleTypeId: $event}], {relativeTo: this.activatedRoute});
    }
}
