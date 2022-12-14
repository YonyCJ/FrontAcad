import {Component, OnInit} from '@angular/core';
import {Validators, FormGroup, FormControl} from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {GradoService} from "@app/providers/services/matricula/matricula/grado.service";
import {Grado} from "@modules/matricula/matricula/models/grado";
import {MatriculaService} from "@app/providers/services/matricula/matricula/matricula.service";
import {Matricula} from "@modules/matricula/matricula/models/matricula";
//import {ConfirmDialogService} from "../../../../../../shared";

@Component({
    selector: 'app-matricula-edit',
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
                                        <label class="col-form-label">G??nero.</label>
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
                                        <label class="col-form-label">Direcci??n.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <input type="text" class="form-control form-control-sm"
                                               formControlName="direccion"
                                               id="direccion"
                                               placeholder="Direcci??n">
                                    </div>

                                </div>

                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">Religi??n.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <input type="text" class="form-control form-control-sm"
                                               formControlName="religion"
                                               id="religion"
                                               placeholder="Religi??n">
                                    </div>

                                </div>
                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">??Discapacidad?.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <input type="text" class="form-control form-control-sm"
                                               formControlName="discapacidad"
                                               id="discapacidad"
                                               placeholder="??Discapacidad?">
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

                                            <option *ngFor="let d of grados" [value]="d.id">{{ d.nivel }}</option>
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
                                        <label class="col-form-label">Ocupaci??n.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <input type="text" class="form-control form-control-sm"
                                               formControlName="ocupacionpadre"
                                               id="ocupacionpadre"
                                               placeholder="Ocupaci??n del padre">
                                    </div>

                                </div>

                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">Grado de instrucci??n.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <input type="text" class="form-control form-control-sm"
                                               formControlName="gradoinstrucionpadre"
                                               id="gradoinstrucionpadre"
                                               placeholder="Grado de instrucci??n del padre">
                                    </div>

                                </div>


                            </div>

                            <div class="col-md-6">
                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">Direcci??n.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <input type="text" class="form-control form-control-sm"
                                               formControlName="direccionpadre"
                                               id="direccionpadre"
                                               placeholder="Direcci??n del padre">
                                    </div>

                                </div>

                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">Correo electr??nico.</label>
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
                                        <label class="col-form-label">N??mero de celular.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <input type="text" class="form-control form-control-sm"
                                               formControlName="celularpadre"
                                               id="celularpadre"
                                               placeholder="N??mero de celular del padre">
                                    </div>

                                </div>

                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">Religi??n.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <input type="text" class="form-control form-control-sm"
                                               formControlName="religionpadre"
                                               id="religionpadre"
                                               placeholder="Religi??n del padre">
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
                                        <label class="col-form-label">Ocupaci??n.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <input type="text" class="form-control form-control-sm"
                                               formControlName="ocupacionmadre"
                                               id="ocupacionmadre"
                                               placeholder="Ocupaci??n de la madre">
                                    </div>

                                </div>

                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">Grado de instrucci??n.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <input type="text" class="form-control form-control-sm"
                                               formControlName="gradoinstrucionmadre"
                                               id="gradoinstrucionmadre"
                                               placeholder="Grado de instrucci??n de la madre">
                                    </div>

                                </div>


                            </div>

                            <div class="col-md-6">
                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">Direcci??n.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <input type="text" class="form-control form-control-sm"
                                               formControlName="direccionmadre"
                                               id="direccionmadre"
                                               placeholder="Direcci??n de la madre">
                                    </div>

                                </div>

                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">Correo electr??nico.</label>
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
                                        <label class="col-form-label">N??mero de celular.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <input type="text" class="form-control form-control-sm"
                                               formControlName="celularmadre"
                                               id="celularmadre"
                                               placeholder="N??mero de celular de la madre">
                                    </div>

                                </div>

                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">Religi??n.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <input type="text" class="form-control form-control-sm"
                                               formControlName="religionmadre"
                                               id="religionmadre"
                                               placeholder="Religi??n de la madre">
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
export class MatriculaEditComponent implements OnInit {
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
    public matricula: Matricula={};
    public  matriculaId: number=0;

    constructor(private matriculaService: MatriculaService,
                private gradoService: GradoService,
                private router: Router,
                private activatedRoute: ActivatedRoute,
    ) {
    }

    ngOnInit() {
        this.getGrados();
        this.activatedRoute.params.subscribe(res => {
            this.matriculaId = res.matriculaId;
            this.getMatriculaById(this.matriculaId);
        });
    }

    public getMatriculaById(matriculaId:number):void{
        this.matriculaService.getById$(matriculaId.toString()).subscribe(response=>{
            this.matricula=response.data;
            this.patchValue(this.matricula);
        });
    }
    public patchValue(matricula:Matricula):void{
    this.matriculaForm.patchValue({
            nombres: matricula.nombres,
        apellidos: matricula.apellidos,
    });}

    public getGrados(): void{
        this.gradoService.getAll$().subscribe(response=>{
            this.grados=response.data;
        });
    }


    public onSave(): void {
        if (this.matriculaForm.valid) {
            console.log(this.matriculaForm.value);
            this.matriculaService.update$(this.matriculaId.toString(),this.matriculaForm.value).subscribe(response => {
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
