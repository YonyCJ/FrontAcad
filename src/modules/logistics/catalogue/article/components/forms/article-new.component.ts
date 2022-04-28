import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {ConfirmDialogService} from "../../../../../../shared";
import {ArticleTypeService} from "@app/providers/services/logistics/catalogue/article-type.service";
import {ArticleType} from "@modules/logistics/catalogue/article-type/models/article-type";
import {Category} from "@modules/logistics/catalogue/category/models/category";
import {Kit} from "@modules/logistics/catalogue/kit/models/kit";
import {MeasureUnit} from "@modules/logistics/catalogue/measure-unit/models/measure-unit";
import {
    ArticleService,
    CategoryService,
    KitService,
    MeasureUnitService
} from "@app/providers/services/logistics/catalogue";

@Component({
    selector: 'app-article-new',
    template: `
        <sb-layout-dashboard>
            <sb-dashboard-head title="Nuevo artículo" [hideBreadcrumbs]="false"></sb-dashboard-head>
            <sb-card>
                <div class="card-body">
                    <form [formGroup]="articleForm">
                        <div class="row">
                            <div class="form-group row required col-md-4">
                                <div class="input-group input-group-sm col-sm-4">
                                    <label class="col-form-label">Categoría.</label>
                                </div>
                                <div class="col-sm-8 input-group input-group-sm input-group-rounded">
                                    <select class="form-control form-control-sm" formControlName="category">
                                        <option *ngFor="let d of categorys"
                                                [value]="d.id"> {{ d.name }}</option>
                                    </select>
                                </div>

                                <div class="col-sm-8 input-group input-group-sm input-group-rounded offset-md-4">
                                    <app-form-validate-errors [group]="articleForm"
                                                              [controlName]="'category'"></app-form-validate-errors>
                                </div>
                            </div>

                            <div class="form-group row required col-md-4">
                                <div class="input-group input-group-sm col-sm-4">
                                    <label class="col-form-label">Tipo de articulo.</label>
                                </div>
                                <div class="col-sm-8 input-group input-group-sm input-group-rounded">
                                    <select class="form-control form-control-sm" formControlName="articleType">
                                        <option *ngFor="let d of articleTypes"
                                                [value]="d.id"> {{ d.name }}</option>
                                    </select>
                                </div>

                                <div class="col-sm-8 input-group input-group-sm input-group-rounded offset-md-4">
                                    <app-form-validate-errors [group]="articleForm"
                                                              [controlName]="'articleType'"></app-form-validate-errors>
                                </div>
                            </div>

                            <div class="form-group row required col-md-4">
                                <div class="input-group input-group-sm col-sm-4">
                                    <label class="col-form-label">Unidad de medida.</label>
                                </div>
                                <div class="col-sm-8 input-group input-group-sm input-group-rounded">
                                    <select class="form-control form-control-sm" formControlName="measureUnit">
                                        <option *ngFor="let d of measureUnits"
                                                [value]="d.id"> {{ d.name }}</option>
                                    </select>
                                </div>

                                <div class="col-sm-8 input-group input-group-sm input-group-rounded offset-md-4">
                                    <app-form-validate-errors [group]="articleForm"
                                                              [controlName]="'measureUnit'"></app-form-validate-errors>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="form-group row required col-md-4">
                                <div class="input-group input-group-sm col-sm-4">
                                    <label class="col-form-label">Artículo.</label>
                                </div>
                                <div class="col-sm-8 input-group input-group-sm input-group-rounded">
                                    <input type="text" class="form-control form-control-sm"
                                           formControlName="name"
                                           id="name"
                                           placeholder="Artículo">
                                </div>
                                <div class="col-sm-8 input-group input-group-sm input-group-rounded offset-md-4">
                                    <app-form-validate-errors [group]="articleForm"
                                                              [controlName]="'name'"></app-form-validate-errors>
                                </div>
                            </div>
                            <div class="form-group row required col-md-4">
                                <div class="input-group input-group-sm col-sm-4">
                                    <label class="col-form-label">Descripción.</label>
                                </div>
                                <div class="col-sm-8 input-group input-group-sm input-group-rounded">
                                    <input type="text" class="form-control form-control-sm"
                                           formControlName="description"
                                           id="description"
                                           placeholder="Descripcion">
                                </div>
                                <div class="col-sm-8 input-group input-group-sm input-group-rounded offset-md-4">
                                    <app-form-validate-errors [group]="articleForm"
                                                              [controlName]="'description'"></app-form-validate-errors>
                                </div>
                            </div>

                            <div class="form-group row required col-md-4">
                                <div class="input-group input-group-sm col-sm-4">
                                    <label class="col-form-label">Código.</label>
                                </div>
                                <div class="col-sm-8 input-group input-group-sm input-group-rounded">
                                    <input type="text" class="form-control form-control-sm"
                                           formControlName="code"
                                           id="code"
                                           placeholder="Código">
                                </div>

                                <div class="col-sm-8 input-group input-group-sm input-group-rounded offset-md-4">
                                    <app-form-validate-errors [group]="articleForm"
                                                              [controlName]="'code'"></app-form-validate-errors>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="form-group row required col-md-2">
                                <div class="input-group input-group-sm col-sm-4">
                                    <label class="col-form-label">Estado.</label>
                                </div>
                                <div class="col-sm-8 input-group input-group-sm input-group-rounded">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="state"
                                               formControlName="state">
                                        <label class="custom-control-label todo-label" for="state">
                            <span
                                class="badge badge-pill badge-{{ articleForm.get('state')!.value ? 'info': 'default' }} float-right">
                                                    {{ articleForm.get('state')!.value ? 'Activo' : 'Desactivo' }}
                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row required col-md-3">
                                <div class="input-group input-group-sm col-sm-4">
                                    <label class="col-form-label">Serie.</label>
                                </div>
                                <div class="col-sm-8 input-group input-group-sm input-group-rounded">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="serie"
                                               formControlName="serie">
                                        <label class="custom-control-label todo-label" for="serie">
                            <span
                                class="badge badge-pill badge-{{ articleForm.get('serie')!.value ? 'info': 'default' }} float-right">
                                                    {{ articleForm.get('serie')!.value ? 'Si' : 'No' }}
                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row required col-md-3">
                                <div class="input-group input-group-sm col-sm-4">
                                    <label class="col-form-label">Kit.</label>
                                </div>
                                <div class="col-sm-8 input-group input-group-sm input-group-rounded">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="kitState"
                                               formControlName="kitState">
                                        <label class="custom-control-label todo-label" for="kitState">
                            <span
                                class="badge badge-pill badge-{{ articleForm.get('kitState')!.value ? 'info': 'default' }} float-right">
                                                    {{ articleForm.get('kitState')!.value ? 'Si' : 'No' }}
                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row required col-md-4" *ngIf="articleForm.get('kitState')!.value">
                                <div class="input-group input-group-sm col-sm-4">
                                    <label class="col-form-label">Kit.</label>
                                </div>
                                <div class="col-sm-8 input-group input-group-sm input-group-rounded">
                                    <select class="form-control form-control-sm" formControlName="kit">
                                        <option *ngFor="let d of kits"
                                                [value]="d.id"> {{ d.name }}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div class="form-group col-md-12 text-right">
                        <button class="btn btn-danger btn-sm" (click)="onBack()"><i
                            class="fa fa-plus-square-o"></i> <span
                            class="fa fa-plus-square-o"></span> Cancelar
                        </button>
                        <button class="btn btn-success btn-sm ml-3" [disabled]="articleForm.invalid" (click)="onSave()">
                            <i class="fa fa-plus-square-o"></i> <span
                            class="fa fa-plus-square-o"></span> Guardar
                        </button>
                    </div>
                </div>
            </sb-card>
        </sb-layout-dashboard>
    `
})
export class ArticleNewComponent implements OnInit {
    articleForm = new FormGroup({
        name: new FormControl(null, [Validators.required]),
        description: new FormControl(null, [Validators.required]),
        code: new FormControl(null, [Validators.required]),
        state: new FormControl(true),
        serie: new FormControl(false),
        kitState: new FormControl(false),
        category: new FormControl(null, [Validators.required]),
        articleType: new FormControl(null, [Validators.required]),
        measureUnit: new FormControl(null, [Validators.required]),
        kit: new FormControl(null),
    });

    private error: string = '';
    articleTypes: ArticleType[] = [];
    categorys: Category[] = [];
    kits: Kit[] = [];
    measureUnits: MeasureUnit[] = [];


    constructor(private articleTypeService: ArticleTypeService,
                private categoryService: CategoryService,
                private measureUnitService: MeasureUnitService,
                private articleService: ArticleService,
                private kitservice: KitService,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                private confirmDialogService: ConfirmDialogService) {
    }

    ngOnInit() {
        this.getArticleTypes();
        this.getCategorys();
        this.getMeasureUnits();
        this.getKits();
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

    private getKits(): void {
        this.kitservice.getAll$().subscribe(response => {
            this.kits = response;
        });
    }

    private getMeasureUnits(): void {
        this.measureUnitService.getAll$().subscribe(response => {
            this.measureUnits = response;
        }, error => {
            this.error = error;
        });
    }

    public onSave(): void {
        if (this.articleForm.valid) {
            this.confirmDialogService.confirmSave().then(() => {
                this.articleService.add$(this.articleForm.value).subscribe(response => {
                    if (response) {
                        this.onBack();
                    }
                }, error => {
                    this.error = error;
                });
            }).catch(() => {
            });
        }
    }

    public onBack(): void {
        this.router.navigate(['../'], {relativeTo: this.activatedRoute});
    }

}
