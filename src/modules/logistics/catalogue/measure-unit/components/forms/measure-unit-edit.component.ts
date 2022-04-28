import {Component, OnInit} from '@angular/core';
import {Validators, FormGroup, FormControl} from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {ConfirmDialogService} from "../../../../../../shared";
import {MeasureUnit} from "@modules/logistics/catalogue/measure-unit/models/measure-unit";
import {MeasureUnitService} from "@app/providers/services/logistics/catalogue";


@Component({
    selector: 'app-measure-unit-new',
    template: `
        <sb-layout-dashboard>
            <sb-dashboard-head title="Editar Unidad de Medida" [hideBreadcrumbs]="false"></sb-dashboard-head>
            <sb-card>
                <div class="card-body">
                    <form [formGroup]="measureUnitForm">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">Unidad de medida.</label>
                                    </div>

                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <input type="text" class="form-control form-control-sm"
                                               formControlName="name"
                                               id="name"
                                               placeholder="Unidad de medida">
                                    </div>
                                    <app-form-validate-errors [group]="measureUnitForm"
                                                              [controlName]="'name'"></app-form-validate-errors>

                                </div>
                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">Simbolo.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <input type="text" class="form-control form-control-sm"
                                               formControlName="symbol"
                                               id="symbol"
                                               placeholder="Simbolo">
                                    </div>
                                    <app-form-validate-errors [group]="measureUnitForm"
                                                              [controlName]="'symbol'"></app-form-validate-errors>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">Simbolo de impresion.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <input type="text" class="form-control form-control-sm"
                                               formControlName="symbolPrint"
                                               id="symbolPrint"
                                               placeholder="Simbolo de impresion">
                                    </div>
                                    <app-form-validate-errors [group]="measureUnitForm"
                                                              [controlName]="'symbolPrint'"></app-form-validate-errors>
                                </div>
                                <div class="form-group row required">
                                    <label class="col-form-label required">Estado</label>
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="state"
                                               formControlName="state">
                                        <label class="custom-control-label todo-label" for="state">
                            <span
                                class="badge badge-pill badge-{{ measureUnitForm.get('state')!.value ? 'info': 'default' }} float-right">
                                                    {{ measureUnitForm.get('state')!.value ? 'Activo' : 'Desactivo' }}
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
                        <button class="btn btn-primary btn-sm" [disabled]="measureUnitForm.invalid" (click)="onSave()"><i
                            class="fa fa-plus-square-o"></i> <span
                            class="fa fa-plus-square-o"></span> Guardar
                        </button>
                    </div>
                </div>
            </sb-card>
        </sb-layout-dashboard>
    `
})
export class MeasureUnitEditComponent implements OnInit {
    measureUnitForm = new FormGroup({
        id: new FormControl('', [Validators.required]),
        name: new FormControl('', [Validators.required]),
        symbol: new FormControl('', [Validators.required]),
        symbolPrint: new FormControl('', [Validators.required]),
        state: new FormControl(true),
    });
    private error: string = '';
    private measureUnitId: number = 0;
    private measureUnit: MeasureUnit = {};

    constructor(private measureUnitService: MeasureUnitService,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                private confirmDialogService: ConfirmDialogService) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(res => {
            this.measureUnitId = res.measureUnitId;
            this.getMeasureuUnitById(this.measureUnitId);
        });
    }

    private getMeasureuUnitById(measureUnitId: number): void {
        this.measureUnitService.getById$(measureUnitId.toString()).subscribe(response => {
            this.measureUnit = response;
            this.patchValueMeasureuUnit(this.measureUnit);
        }, error => {
            this.error = error;
        });
    }

    private patchValueMeasureuUnit(measureUnit: MeasureUnit) {
        this.measureUnitForm.patchValue({
            id: this.measureUnitId,
            name: measureUnit.name,
            symbol: measureUnit.symbol,
            symbolPrint: measureUnit.symbolPrint,
            state: measureUnit.state
        });
    }

    public onSave(): void {
        if (this.measureUnitForm.valid) {
            this.confirmDialogService.confirmUpdate().then(() => {
                this.measureUnitService.updateObject$(this.measureUnitForm.value).subscribe(response => {
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
