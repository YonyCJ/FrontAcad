import {Component, OnInit} from '@angular/core';
import {Validators, FormGroup, FormControl} from '@angular/forms';
import {CursoService} from "@app/providers/services/configuracion/curso";
import {ActivatedRoute, Router} from "@angular/router";
import {GradoService} from "@app/providers/services/configuracion/curso/grado.service";
import {Grado} from "@modules/configuracion/curso/models/grado";
import {PersonaService} from "@app/providers/services/configuracion/curso/persona.service";
import {Rol} from "@modules/configuracion/persona/models/rol";
import {UserService} from "@app/providers/services/configuracion/curso/user.service";
import {RolService} from "@app/providers/services/configuracion/curso/rol.service";
import {User} from "@modules/auth/models";
//import {ConfirmDialogService} from "../../../../../../shared";

@Component({
    selector: 'app-persona-new',
    template: `
        <sb-layout-dashboard>
            <sb-dashboard-head title="Nueva persona" [hideBreadcrumbs]="false"></sb-dashboard-head>
            <sb-card>
                <div class="card-body">
                    <form [formGroup]="personaForm">
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
                                               id="apeliidos"
                                               placeholder="Apellidos">
                                    </div>

                                </div>


                                <div class="form-group row required">





                                    <div class="form-group row required">

                                        <div class="input-group input-group-sm col-sm-3">
                                            <label class="col-form-label">Estado.</label>
                                        </div>

                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="state"
                                                   formControlName="estado">
                                            <label class="custom-control-label todo-label" for="state">
                                    <span
                                        class="badge badge-pill badge-{{ personaForm.get('estado').value ? 'primary': 'default' }} float-center">
                                            {{ personaForm.get('estado').value ? 'Activo' : 'Inactivo' }}
                                    </span>
                                            </label>
                                        </div>
                                    </div>

                                </div>



                                <div class="form-group row required">


                                    <div class="form-group row required">

                                        <div class="input-group input-group-sm col-sm-3">
                                            <label class="col-form-label">Sexo.</label>
                                        </div>

                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="state2"
                                                   formControlName="sexo">
                                            <label class="custom-control-label todo-label" for="state2">
                                    <span
                                        class="badge badge-pill badge-{{ personaForm.get('sexo').value ? 'primary': 'default' }} float-center">
                                            {{ personaForm.get('sexo').value ? 'Masculino' : 'Femenino' }}
                                    </span>
                                            </label>
                                        </div>
                                    </div>

                            </div>



                            <div class="col-md-6">
                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">Usuario.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <select class="form-control form-control-sm" formControlName="user_id">

                                            <option *ngFor="let d of users" [value]="d.id">{{ d.firstName}} {{d.email}}</option>
                                        </select>
                                    </div>

                                </div>

                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">Rol.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <select class="form-control form-control-sm" formControlName="rol_id">

                                            <option *ngFor="let d of rol" [value]="d.id">{{ d.nombre }} </option>
                                        </select>
                                    </div>

                                </div>
                            </div>

                        </div>
                        </div> </form>
                    <div class="form-group col-md-12 text-right">
                        <button class="btn btn-danger btn-sm" (click)="onBack()"><i
                            class="fa fa-plus-square-o"></i> <span
                            class="fa fa-plus-square-o"></span> Cancelar
                        </button>
                        <button class="btn btn-success btn-sm ml-3" [disabled]="personaForm.invalid" (click)="onSave()">
                            <i class="fa fa-plus-square-o"></i> <span
                            class="fa fa-plus-square-o"></span> Guardar
                        </button>
                    </div>
                </div>
            </sb-card>
        </sb-layout-dashboard>



    `
})
export class PersonaNewComponent implements OnInit {
    personaForm = new FormGroup({
        nombres: new FormControl('', [Validators.required]),
        apellidos: new FormControl('', [Validators.required]),
        estado: new FormControl('', [Validators.required]),
        sexo: new FormControl('', [Validators.required]),
        user_id: new FormControl('', [Validators.required]),
        rol_id: new FormControl('', [Validators.required]),

    });

    private error: string = '';

    public users:User[]=[];
    public rol:Rol[]=[];

    constructor(private personaService: PersonaService,
                private userService: UserService,
                private rolService: RolService,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                ) {
    }

    ngOnInit() {
        this.getUser();
        this.getRol();
    }
    public getUser(): void{
    this.userService.getAll$().subscribe(response=>{
        console.log(response);
        this.users=response.data;
        });
    }

    public getRol(): void{
        this.rolService.getAll$().subscribe(response=>{
            this.rol=response.data;
        });
    }

    public onSave(): void {
        if (this.personaForm.valid) {
            console.log(this.personaForm.value);
                this.personaService.add$(this.personaForm.value).subscribe(response => {
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
