import {Component, OnInit} from '@angular/core';
import {Validators, FormGroup, FormControl} from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {GradoService} from "@app/providers/services/matricula/matricula/grado.service";
import {Grado} from "@modules/matricula/matricula/models/grado";
import {MatriculaService} from "@app/providers/services/matricula/matricula/matricula.service";
import {Persona} from "@modules/configuracion/curso/models/persona";
//import {ConfirmDialogService} from "../../../../../../shared";

@Component({
    selector: 'app-matricula-new',
    template: `
        <sb-layout-dashboard>
            <sb-dashboard-head title="Nueva matricula" [hideBreadcrumbs]="false"></sb-dashboard-head>
            <sb-card>
                <div class="card-body">
                    <form [formGroup]="matriculaForm">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">Nombres.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <input type="text" class="form-control form-control-sm"
                                               formControlName="nombres"
                                               id="nombres"
                                               placeholder="Nombres">
                                    </div>

                                </div>
                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">Apellidos.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <input type="text" class="form-control form-control-sm"
                                               formControlName="apellidos"
                                               id="apellidos"
                                               placeholder="Apellidos">
                                    </div>

                                </div>


                                <div class="form-group row required">

                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">Género.</label>
                                    </div>

                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="state"
                                               formControlName="sexo">
                                        <label class="custom-control-label todo-label" for="state">
                                    <span
                                        class="badge badge-pill badge-{{ matriculaForm.get('sexo').value ? 'primary': 'default' }} float-center">
                                            {{ matriculaForm.get('sexo').value ? 'Masculino' : 'Femenino' }}
                                    </span>
                                        </label>
                                    </div>
                                </div>

                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">Correo.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <input type="text" class="form-control form-control-sm"
                                               formControlName="correo"
                                               id="correo"
                                               placeholder="Correo">
                                    </div>

                                </div>
                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">DNI.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <input type="text" class="form-control form-control-sm"
                                               formControlName="dni"
                                               id="dni"
                                               placeholder="DNI">
                                    </div>

                                </div>
                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">Fecha de Nacimiento.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <input type="text" class="form-control form-control-sm"
                                               formControlName="fechanac"
                                               id="fechanac"
                                               placeholder="Fecha de Nacimiento">
                                    </div>

                                </div>

                            </div>
                            <!-- -------------------------------------------------------------------------------------------------- -->
                            <div class="col-md-6">


                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">Lugar de Nacimieto.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <input type="text" class="form-control form-control-sm"
                                               formControlName="lugarnac"
                                               id="lugarnac"
                                               placeholder="Lugar de Nacimieto">
                                    </div>

                                </div>

                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">Dirección.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <input type="text" class="form-control form-control-sm"
                                               formControlName="direccion"
                                               id="direccion"
                                               placeholder="Dirección">
                                    </div>

                                </div>

                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">Religión.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <input type="text" class="form-control form-control-sm"
                                               formControlName="religion"
                                               id="religion"
                                               placeholder="Religión">
                                    </div>

                                </div>
                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">¿Discapacidad?.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <input type="text" class="form-control form-control-sm"
                                               formControlName="discapacidad"
                                               id="discapacidad"
                                               placeholder="¿Discapacidad?">
                                    </div>

                                </div>

                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">Grado.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <select class="form-control form-control-sm" formControlName="grado_id">

                                            <option *ngFor="let d of grados" [value]="d.id">{{ d.nombre }} {{d.seccion}}</option>
                                        </select>
                                    </div>

                                </div>
                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">Nivel.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <select class="form-control form-control-sm" formControlName="nivel_id">

                                            <option *ngFor="let d of grados" [value]="d.id">{{ d.nivel }} </option>
                                        </select>
                                    </div>

                                </div>

                            </div>


                        </div>
                    </form>

                </div>
            </sb-card>
<!--  --------------------------------------------------------------------------------------------------------------- -->
            <sb-card>
                <div class="card-body">
                    <form [formGroup]="matriculaForm">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">Nombres.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <input type="text" class="form-control form-control-sm"
                                               formControlName="nombrespadre"
                                               id="nomdrespadre"
                                               placeholder="Nombres del padre o apoderado">
                                    </div>

                                </div>
                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">Apellidos.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <input type="text" class="form-control form-control-sm"
                                               formControlName="apellidospadre"
                                               id="apellidospadre"
                                               placeholder="Apellidos del padre o apoderado">
                                    </div>

                                </div>

                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">DNI o carnet de estranjeria.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <input type="text" class="form-control form-control-sm"
                                               formControlName="dnipadre"
                                               id="dnipadre"
                                               placeholder="DNI o carnet de estranjeria del padre">
                                    </div>

                                </div>
                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">Ocupación.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <input type="text" class="form-control form-control-sm"
                                               formControlName="ocupacionpadre"
                                               id="ocupacionpadre"
                                               placeholder="Ocupación del padre">
                                    </div>

                                </div>

                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">Grado de instrucción.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <input type="text" class="form-control form-control-sm"
                                               formControlName="gradoinstrucionpadre"
                                               id="gradoinstrucionpadre"
                                               placeholder="Grado de instrucción del padre">
                                    </div>

                                </div>


                            </div>

                            <div class="col-md-6">
                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">Dirección.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <input type="text" class="form-control form-control-sm"
                                               formControlName="direccionpadre"
                                               id="direccionpadre"
                                               placeholder="Dirección del padre">
                                    </div>

                                </div>

                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">Correo electrónico.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <input type="text" class="form-control form-control-sm"
                                               formControlName="correopadre"
                                               id="correopadre"
                                               placeholder="Correo del padre">
                                    </div>

                                </div>

                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">Número de celular.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <input type="text" class="form-control form-control-sm"
                                               formControlName="celularpadre"
                                               id="celularpadre"
                                               placeholder="Número de celular del padre">
                                    </div>

                                </div>

                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">Religión.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <input type="text" class="form-control form-control-sm"
                                               formControlName="religionpadre"
                                               id="religionpadre"
                                               placeholder="Religión del padre">
                                    </div>

                                </div>
                            </div>


                        </div>
                    </form>

                </div>
            </sb-card>
<!-- --------------------------------------------------------------------------------------------------------------------------------- -->
            <sb-card>
                <div class="card-body">
                    <form [formGroup]="matriculaForm">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">Nombres.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <input type="text" class="form-control form-control-sm"
                                               formControlName="nombresmadre"
                                               id="nomdresmadre"
                                               placeholder="Nombres de la madre o apoderado">
                                    </div>

                                </div>
                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">Apellidos.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <input type="text" class="form-control form-control-sm"
                                               formControlName="apellidosmadre"
                                               id="apellidosmadre"
                                               placeholder="Apellidos de la madre o apoderado">
                                    </div>

                                </div>

                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">DNI o carnet de estranjeria.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <input type="text" class="form-control form-control-sm"
                                               formControlName="dnimadre"
                                               id="dnimadre"
                                               placeholder="DNI o carnet de estranjeria del madre">
                                    </div>

                                </div>
                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">Ocupación.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <input type="text" class="form-control form-control-sm"
                                               formControlName="ocupacionmadre"
                                               id="ocupacionmadre"
                                               placeholder="Ocupación de la madre">
                                    </div>

                                </div>

                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">Grado de instrucción.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <input type="text" class="form-control form-control-sm"
                                               formControlName="gradoinstrucionmadre"
                                               id="gradoinstrucionmadre"
                                               placeholder="Grado de instrucción de la madre">
                                    </div>

                                </div>


                            </div>

                            <div class="col-md-6">
                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">Dirección.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <input type="text" class="form-control form-control-sm"
                                               formControlName="direccionmadre"
                                               id="direccionmadre"
                                               placeholder="Dirección de la madre">
                                    </div>

                                </div>

                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">Correo electrónico.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <input type="text" class="form-control form-control-sm"
                                               formControlName="correomadre"
                                               id="correomadre"
                                               placeholder="Correo de la madre">
                                    </div>

                                </div>

                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">Número de celular.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <input type="text" class="form-control form-control-sm"
                                               formControlName="celularmadre"
                                               id="celularmadre"
                                               placeholder="Número de celular de la madre">
                                    </div>

                                </div>

                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">Religión.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <input type="text" class="form-control form-control-sm"
                                               formControlName="religionmadre"
                                               id="religionmadre"
                                               placeholder="Religión de la madre">
                                    </div>

                                </div>
                            </div>


                        </div>
                    </form>

                </div>
            </sb-card>
<!-- ----------------------------------------------------------------------------------------------------------------------------------------- -->
            <div class="form-group col-md-12 text-right">
                <button class="btn btn-danger btn-sm" (click)="onBack()"><i
                    class="fa fa-plus-square-o"></i> <span
                    class="fa fa-plus-square-o"></span> Cancelar
                </button>
                <button class="btn btn-success btn-sm ml-3" [disabled]="matriculaForm.invalid" (click)="onSave()">
                    <i class="fa fa-plus-square-o"></i> <span
                    class="fa fa-plus-square-o"></span> Guardar
                </button>
            </div>

        </sb-layout-dashboard>



    `
})
export class MatriculaNewComponent implements OnInit {
    matriculaForm = new FormGroup({
        nombres: new FormControl('', [Validators.required]),
        apellidos: new FormControl('', [Validators.required]),
        sexo: new FormControl('', [Validators.required]),
        grado_id: new FormControl('', [Validators.required]),
        correo: new FormControl('', [Validators.required]),
        dni: new FormControl('', [Validators.required]),
        fechanac: new FormControl('', [Validators.required]),
        lugarnac: new FormControl('', [Validators.required]),
        direccion: new FormControl('', [Validators.required]),
        religion: new FormControl('', [Validators.required]),
        discapacidad: new FormControl('', [Validators.required]),
        nivel_id: new FormControl('', [Validators.required]),
        nombrespadre: new FormControl('', [Validators.required]),
        apellidospadre: new FormControl('', [Validators.required]),
        dnipadre: new FormControl('', [Validators.required]),
        ocupacionpadre: new FormControl('', [Validators.required]),
        gradoinstrucionpadre: new FormControl('', [Validators.required]),
        direccionpadre: new FormControl('', [Validators.required]),
        correopadre: new FormControl('', [Validators.required]),
        celularpadre: new FormControl('', [Validators.required]),
        religionpadre: new FormControl('', [Validators.required]),
        nombresmadre: new FormControl('', [Validators.required]),
        apellidosmadre: new FormControl('', [Validators.required]),
        dnimadre: new FormControl('', [Validators.required]),
        ocupacionmadre: new FormControl('', [Validators.required]),
        gradoinstrucionmadre: new FormControl('', [Validators.required]),
        direccionmadre: new FormControl('', [Validators.required]),
        correomadre: new FormControl('', [Validators.required]),
        celularmadre: new FormControl('', [Validators.required]),
        religionmadre: new FormControl('', [Validators.required]),
        estad: new FormControl('', [Validators.required]),

    });

    private error: string = '';

    public grados:Grado[]=[];

    constructor(private matriculaService: MatriculaService,
                private gradoService: GradoService,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                ) {
    }

    ngOnInit() {
        this.getGrados();
    }
    public getGrados(): void{
    this.gradoService.getAll$().subscribe(response=>{
        this.grados=response.data;
        });
    }

    public onSave(): void {
        if (this.matriculaForm.valid) {
            console.log(this.matriculaForm.value);
                this.matriculaService.add$(this.matriculaForm.value).subscribe(response => {
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
