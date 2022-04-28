import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ArticleService} from "@app/providers/services/logistics/catalogue";
import {Article} from "@modules/logistics/catalogue/article/models/article";
import {Pagination} from "../../../../../shared/pagination/pagination.component";

@Component({
    selector: 'app-article-containers',
    template: `
        <sb-layout-dashboard>
            <sb-dashboard-head title="Artículos" [hideBreadcrumbs]="false"></sb-dashboard-head>
            <sb-card>
                <div class="card-body">
                    <app-article-filter (eventFilters)="eventFilters($event)"></app-article-filter>
                    <app-article-list [articles]="articles" (eventNew)="eventNew($event)"
                                      (eventEdit)="eventEdit($event)"></app-article-list>
                    <app-pagination [pagination]="pagination" (eventPaginate)="eventPaginate($event)">
                    </app-pagination>
                </div>
            </sb-card>
        </sb-layout-dashboard>`
})

export class ArticleContainerComponent implements OnInit {
    public articles: Article[] = [];
    private error: string = '';
    pagination: Pagination = {};
    private filter: Object = {};

    constructor(
        private articleService: ArticleService,
        private router: Router,
        private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.getArticles();
    }
    public getArticles(params?: Object): void {
        this.articleService.getWithQuery$(params).subscribe(response => {
            this.articles = response.content;
            this.pagination = response;
            }, error => {
            this.error = error;
        });
    }

    eventPaginate($event: Object) {
        $event = Object.assign(this.filter, $event);
        this.getArticles($event);
    }

    public eventNew($event: boolean): void {
        if ($event) {
            this.router.navigate(['new'], {relativeTo: this.activatedRoute});
        }

    }

    public eventEdit($event: number): void {
        this.router.navigate(['edit', {articleId: $event}], {relativeTo: this.activatedRoute});
    }

    public eventFilters($event: Object) {
        this.filter = $event;
        this.getArticles($event);
    }
}
