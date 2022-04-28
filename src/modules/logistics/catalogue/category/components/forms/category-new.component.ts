import {Component, OnInit} from '@angular/core';
import {Validators, FormGroup, FormControl} from '@angular/forms';
import {CategoryService} from "@app/providers/services/logistics/catalogue";
import {ActivatedRoute, Router} from "@angular/router";
import {ConfirmDialogService} from "../../../../../../shared";

@Component({
    selector: 'app-category-new',
    template: `
        <sb-layout-dashboard>
            <sb-dashboard-head title="Nueva Categoría" [hideBreadcrumbs]="false"></sb-dashboard-head>
            <sb-card>
                <div class="card-body">
                    <form [formGroup]="categoyForm">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">Categoría.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <input type="text" class="form-control form-control-sm"
                                               formControlName="name"
                                               id="name"
                                               placeholder="Categoria">
                                    </div>
                                    <div class="col-sm-3"></div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded m-0">
                                        <app-form-validate-errors [group]="categoyForm"
                                                                  [controlName]="'name'"></app-form-validate-errors>
                                    </div>
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
                                    <div class="col-sm-3"></div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded m-0">
                                        <app-form-validate-errors [group]="categoyForm"
                                                                  [controlName]="'description'"></app-form-validate-errors>
                                    </div>
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
                                    <div class="col-sm-3"></div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded m-0">
                                        <app-form-validate-errors [group]="categoyForm"
                                                                  [controlName]="'code'"></app-form-validate-errors>
                                    </div>
                                </div>
                                <div class="form-group row required">
                                    <label class="col-form-label required">Estado</label>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="state"
                                               formControlName="state">
                                        <label class="custom-control-label todo-label" for="state">
                            <span
                                class="badge badge-pill badge-{{ categoyForm.get('state')!.value ? 'info': 'default' }} float-right">
                                                    {{ categoyForm.get('state')!.value ? 'Activo' : 'Desactivo' }}
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
                        <button class="btn btn-success btn-sm ml-3" [disabled]="categoyForm.invalid" (click)="onSave()">
                            <i class="fa fa-plus-square-o"></i> <span
                            class="fa fa-plus-square-o"></span> Guardar
                        </button>
                    </div>
                </div>
            </sb-card>
        </sb-layout-dashboard>

    `
})
export class CategoryNewComponent implements OnInit {
    categoyForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
        code: new FormControl('', [Validators.required]),
        state: new FormControl(true),
    });

    private error: string = '';


    constructor(private categoryService: CategoryService,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                private confirmDialogService: ConfirmDialogService) {
    }

    ngOnInit() {
    }

    public onSave(): void {
        if (this.categoyForm.valid) {
            this.confirmDialogService.confirmSave().then(() => {
                this.categoryService.add$(this.categoyForm.value).subscribe(response => {
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
