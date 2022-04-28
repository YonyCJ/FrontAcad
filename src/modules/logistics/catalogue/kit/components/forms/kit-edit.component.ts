import {Component, OnInit} from '@angular/core';
import {Validators, FormGroup, FormControl} from '@angular/forms';
import {CategoryService, KitService} from "@app/providers/services/logistics/catalogue";
import {ActivatedRoute, Router} from "@angular/router";
import {Category} from "@modules/logistics/catalogue/category/models/category";
import {ConfirmDialogService} from "../../../../../../shared";
import {Kit, KitDetail} from "@modules/logistics/catalogue/kit/models/kit";
import {ArticleAutocomplete} from "@modules/logistics/catalogue/article/models/article";

@Component({
    selector: 'app-kit-new',
    template: `
        <sb-layout-dashboard>
            <sb-dashboard-head title="Editar Kit" [hideBreadcrumbs]="false"></sb-dashboard-head>
            <sb-card>
                <div class="card-body">
                    <form [formGroup]="kitForm">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">Kit.</label>
                                    </div>

                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <input type="text" class="form-control form-control-sm"
                                               formControlName="name"
                                               id="name"
                                               placeholder="Kit">
                                    </div>
                                    <app-form-validate-errors [group]="kitForm"
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
                                    <app-form-validate-errors [group]="kitForm"
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
                                    <app-form-validate-errors [group]="kitForm"
                                                              [controlName]="'code'"></app-form-validate-errors>
                                </div>
                                <div class="form-group row required">
                                    <label class="col-form-label required">Estado</label>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="state"
                                               formControlName="state">
                                        <label class="custom-control-label todo-label" for="state">
                            <span
                                class="badge badge-pill badge-{{ kitForm.get('state')!.value ? 'info': 'default' }} float-right">
                                                    {{ kitForm.get('state')!.value ? 'Activo' : 'Desactivo' }}
                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 form-group">
                                <label class="col-form-label required">Buscar Artículo:</label>
                                <app-autocomplete-articles
                                    (articleSelected)="articleSelected($event)"></app-autocomplete-articles>
                            </div>
                        </div>
                    </form>
                    <div class="responsive-table">
                        <table class="table table-bordered table-sm table-hover">
                            <thead>
                            <tr>
                                <th class="text-center" scope="col">#</th>
                                <th scope="col">Descripción</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Estado</th>
                                <th scope="col">Acciones</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr *ngFor="let r of kitDetails; let i= index">
                                <th scope="row">{{i + 1}}</th>
                                <td data-title="Descripción">{{r.articleName}}</td>
                                <td data-title="Cantidad"><input type="number" class="form-control form-control-sm"
                                                                 [(ngModel)]="r.amount">
                                </td>
                                <td data-title="Estado">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="men{{i}}"
                                               [(ngModel)]="r.state">
                                        <label class="custom-control-label todo-label" for="men{{i}}">
                                            <span
                                                class="badge badge-pill badge-{{ r.state ? 'primary': 'dark' }} float-right"></span>
                                        </label>
                                    </div>
                                </td>
                                <td data-title="Acciones">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col text-center">
                                                <button type="button" class="btn btn-labeled btn-danger btn-group-sm"
                                                        title="Eliminar"
                                                        (click)="deleteKitDetail(r.id)">
                                                    <i class="nc-icon ui-1_trash h5 mb-0"></i>
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="form-group col-md-12 text-right">
                        <button class="btn btn-danger btn-sm" (click)="onBack()"><i
                            class="fa fa-plus-square-o"></i> <span
                            class="fa fa-plus-square-o"></span> Cancelar
                        </button>
                        <button class="btn btn-primary btn-sm" [disabled]="kitForm.invalid" (click)="onSave()"><i
                            class="fa fa-plus-square-o"></i> <span
                            class="fa fa-plus-square-o"></span> Guardar
                        </button>
                    </div>
                </div>
            </sb-card>
        </sb-layout-dashboard>
    `
})
export class KitEditComponent implements OnInit {
    kitDetails: KitDetail[] = [];
    kitDetail: KitDetail = {};
    kitForm = new FormGroup({
        id: new FormControl('', [Validators.required]),
        name: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
        code: new FormControl('', [Validators.required]),
        state: new FormControl(true),
    });
    private error: string = '';
    private kitId: number = 0;
    private kit: Kit = {};

    constructor(private kitService: KitService,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                private confirmDialogService: ConfirmDialogService) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(res => {
            this.kitId = res.kitId;
            this.getKitById(this.kitId);
        });
    }

    private getKitById(categoryId: number): void {
        this.kitService.getById$(categoryId.toString()).subscribe(response => {
            this.kit = response;
            this.kitDetails = response.details;
            this.patchValueKit(this.kit);
        }, error => {
            this.error = error;
        });
    }

    private patchValueKit(kit: Kit) {
        this.kitForm.patchValue({
            id: this.kitId,
            name: this.kit.name,
            description: this.kit.description,
            code: this.kit.code,
            state: this.kit.state
        });
    }

    public onSave(): void {
        if (this.kitForm.valid && this.kitDetails.length > 0) {
            this.kitForm.value.details = this.kitDetails;
            this.confirmDialogService.confirmUpdate().then(() => {
                this.kitService.updateObject$(this.kitForm.value).subscribe(response => {
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

    public articleSelected(articleAutocomplete: ArticleAutocomplete) {
        const found = this.kitDetails.find(element => element.article === parseInt(articleAutocomplete.id.toString()));
        if (!found) {
            this.kitDetail = {};
            this.kitDetail.articleName = articleAutocomplete.name;
            this.kitDetail.article = parseInt(articleAutocomplete.id.toString());
            this.kitDetail.state = true;
            this.kitDetail.amount = 0;
            this.kitDetails.push(this.kitDetail);
        }
    }

    public deleteKitDetail(index: number) {
        this.kitDetails.splice(index, 1);
    }
}
