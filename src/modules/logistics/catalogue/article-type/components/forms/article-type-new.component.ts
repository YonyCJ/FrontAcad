import {Component, OnInit} from '@angular/core';
import {Validators, FormGroup, FormControl} from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {ConfirmDialogService} from "../../../../../../shared";
import {ArticleTypeService} from "@app/providers/services/logistics/catalogue";


@Component({
    selector: 'app-article-type-new',
    template: `
        <sb-layout-dashboard>
            <sb-dashboard-head title="Nuevo tipo de articulo" [hideBreadcrumbs]="false"></sb-dashboard-head>
            <sb-card>
                <div class="card-body">
                    <form [formGroup]="articleTypeForm">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">Tipo de articulo.</label>
                                    </div>

                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <input type="text" class="form-control form-control-sm"
                                               formControlName="name"
                                               id="name"
                                               placeholder="Tipo de articulo">
                                    </div>
                                    <app-form-validate-errors [group]="articleTypeForm"
                                                              [controlName]="'name'"></app-form-validate-errors>

                                </div>
                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">Descripción.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <input type="text" class="form-control form-control-sm"
                                               formControlName="description"
                                               id="description"
                                               placeholder="Descripcion">
                                    </div>
                                    <app-form-validate-errors [group]="articleTypeForm"
                                                              [controlName]="'description'"></app-form-validate-errors>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">Código.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <input type="text" class="form-control form-control-sm"
                                               formControlName="code"
                                               id="code"
                                               placeholder="Código">
                                    </div>
                                    <app-form-validate-errors [group]="articleTypeForm"
                                                              [controlName]="'code'"></app-form-validate-errors>
                                </div>
                                <div class="form-group row required">
                                    <label class="col-form-label required">Estado</label>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="state"
                                               formControlName="state">
                                        <label class="custom-control-label todo-label" for="state">
                            <span
                                class="badge badge-pill badge-{{ articleTypeForm.get('state')!.value ? 'info': 'default' }} float-right">
                                                    {{ articleTypeForm.get('state')!.value ? 'Activo' : 'Desactivo' }}
                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div class="form-group col-md-12 text-right">
                        <button class="btn btn-danger btn-sm" (click)="onBack()"><i
                            class="fa fa-plus-square-o"></i> <span
                            class="fa fa-plus-square-o"></span> Cancelar
                        </button>
                        <button class="btn btn-primary btn-sm" [disabled]="articleTypeForm.invalid" (click)="onSave()">
                            <i
                                class="fa fa-plus-square-o"></i> <span
                            class="fa fa-plus-square-o"></span> Guardar
                        </button>
                    </div>
                </div>
            </sb-card>
        </sb-layout-dashboard>
    `
})
export class ArticleTypeNewComponent implements OnInit {
    articleTypeForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
        code: new FormControl('', [Validators.required]),
        state: new FormControl(true),
    });

    private error: string = '';


    constructor(private articleTypeService: ArticleTypeService,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                private confirmDialogService: ConfirmDialogService) {
    }

    ngOnInit() {
    }

    public onSave(): void {
        if (this.articleTypeForm.valid) {
            this.confirmDialogService.confirmSave().then(() => {
                this.articleTypeService.add$(this.articleTypeForm.value).subscribe(response => {
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
