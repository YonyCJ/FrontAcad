import {Component, OnInit} from '@angular/core';
import {Validators, FormGroup, FormControl} from '@angular/forms';
import {CursoService} from "@app/providers/services/configuracion/curso";
import {ActivatedRoute, Router} from "@angular/router";
import {GradoService} from "@app/providers/services/configuracion/curso/grado.service";
import {Grado} from "@modules/configuracion/curso/models/grado";


//import {ConfirmDialogService} from "../../../../../../shared";

@Component({
    selector: 'app-grado-new',
    template: `
        <sb-layout-dashboard>
            <sb-dashboard-head title="Nuevo grado" [hideBreadcrumbs]="false"></sb-dashboard-head>
            <sb-card>
                <div class="card-body">
                    <form [formGroup]="gradoForm">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">Nombre.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <input type="text" class="form-control form-control-sm"
                                               formControlName="nombre"
                                               id="nombre"
                                               placeholder="Nombre">
                                    </div>

                                </div>
                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">Sección.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <input type="text" class="form-control form-control-sm"
                                               formControlName="seccion"
                                               id="seccion"
                                               placeholder="Sección">
                                    </div>

                                </div>

                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">Nivel.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <input type="text" class="form-control form-control-sm"
                                               formControlName="nivel"
                                               id="nivel"
                                               placeholder="Nivel">
                                    </div>

                                </div>


                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">Vacantes.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <input type="text" class="form-control form-control-sm"
                                               formControlName="vacantes"
                                               id="vacantes"
                                               placeholder="Vacantes">
                                    </div>

                                </div>


                        </div>
                        </div> </form>
                    <div class="form-group col-md-12 text-right">
                        <button class="btn btn-danger btn-sm" (click)="onBack()"><i
                            class="fa fa-plus-square-o"></i> <span
                            class="fa fa-plus-square-o"></span> Cancelar
                        </button>
                        <button class="btn btn-success btn-sm ml-3" [disabled]="gradoForm.invalid" (click)="onSave()">
                            <i class="fa fa-plus-square-o"></i> <span
                            class="fa fa-plus-square-o"></span> Guardar
                        </button>
                    </div>
                </div>
            </sb-card>
        </sb-layout-dashboard>



    `
})
export class GradoNewComponent implements OnInit {
    gradoForm = new FormGroup({
        nombre: new FormControl('', [Validators.required]),
        seccion: new FormControl('', [Validators.required]),
        nivel: new FormControl('', [Validators.required]),
        vacantes: new FormControl('', [Validators.required]),


    });

    private error: string = '';

    constructor(private gradoService: GradoService,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                ) {
    }

    ngOnInit() {

    }




    public onSave(): void {
        if (this.gradoForm.valid) {
            console.log(this.gradoForm.value);
                this.gradoService.add$(this.gradoForm.value).subscribe(response => {
                    if (response) {
                        this.onBack();
                    }
                }, error => {
                    this.error = error;
                });

        }
    }

    public onBack(): void {
        this.router.navigate(['../'], {relativeTo: this.activatedRoute});
    }

}
