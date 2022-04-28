import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {ConfirmDialogService} from "../../../../../../shared";
import {ArticleTypeService} from "@app/providers/services/logistics/catalogue/article-type.service";
import {ArticleType} from "@modules/logistics/catalogue/article-type/models/article-type";
import {Category} from "@modules/logistics/catalogue/category/models/category";
import {Kit} from "@modules/logistics/catalogue/kit/models/kit";
import {MeasureUnit} from "@modules/logistics/catalogue/measure-unit/models/measure-unit";
import {ArticleService, CategoryService, MeasureUnitService} from "@app/providers/services/logistics/catalogue";

@Component({
    selector: 'app-article-filter',
    template: `
        <form [formGroup]="filterForm">
            <div class="row">
                <div class="col-md-2">
                    <label class="col-form-label">Categoría.</label>
                    <div class="input-group input-group-sm input-group-rounded">
                        <select class="form-control form-control-sm" formControlName="category">
                            <option *ngFor="let d of categorys"
                                    [value]="d.id"> {{ d.name }}</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-2">
                    <label class="col-form-label">Tipo de articulo.</label>
                    <div class="input-group input-group-sm input-group-rounded">
                        <select class="form-control form-control-sm" formControlName="articleType">
                            <option *ngFor="let d of articleTypes"
                                    [value]="d.id"> {{ d.name }}</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-2">
                    <label class="col-form-label">Código.</label>
                    <div class="input-group input-group-sm input-group-rounded">
                        <input type="text" class="form-control form-control-sm"
                               formControlName="code"
                               id="code"
                               placeholder="Código">
                    </div>
                </div>
                <div class="col-md-2">
                    <label class="col-form-label">Click para buscar</label>
                    <div class="form-group col-md-12 text-right">
                        <button class="btn btn-success btn-sm ml-3" [disabled]="filterForm.invalid"
                                (click)="onFilter()">
                            <i class="fa fa-plus-square-o"></i> <span
                            class="fa fa-plus-square-o"></span> Buscar
                        </button>
                    </div>
                </div>
            </div>
        </form>
    `
})
export class ArticleFilterComponent implements OnInit {
    filterForm = new FormGroup({
        code: new FormControl(''),
        category: new FormControl('', [Validators.required]),
        articleType: new FormControl('', [Validators.required]),
    });

    private error: string = '';
    articleTypes: ArticleType[] = [];
    categorys: Category[] = [];
    kits: Kit[] = [];
    measureUnits: MeasureUnit[] = [];
    @Output() eventFilters = new EventEmitter<object>();


    constructor(private articleTypeService: ArticleTypeService,
                private categoryService: CategoryService,
                private measureUnitService: MeasureUnitService) {
    }

    ngOnInit() {
        this.getArticleTypes();
        this.getCategorys();
        this.getMeasureUnits();
    }
    private getArticleTypes(): void {
        this.articleTypeService.getAll$().subscribe(response => {
            this.articleTypes = response;
        }, error => {
            this.error = error;
        });
    }

    private getCategorys(): void {
        this.categoryService.getAll$().subscribe(response => {
            this.categorys = response;
        }, error => {
            this.error = error;
        });
    }

    private getMeasureUnits(): void {
        this.measureUnitService.getAll$().subscribe(response => {
            this.measureUnits = response;
        }, error => {
            this.error = error;
        });
    }

    public onFilter(): void {
        this.eventFilters.emit(this.filterForm.value);
    }
}
