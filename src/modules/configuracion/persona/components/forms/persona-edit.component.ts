import {Component, OnInit} from '@angular/core';
import {Validators, FormGroup, FormControl} from '@angular/forms';
import {CursoService} from "@app/providers/services/configuracion/curso";
import {ActivatedRoute, Router} from "@angular/router";
import {GradoService} from "@app/providers/services/configuracion/curso/grado.service";
import {Grado} from "@modules/configuracion/curso/models/grado";
import {PersonaService} from "@app/providers/services/configuracion/curso/persona.service";
import {Persona} from "@modules/configuracion/curso/models/persona";
import {Curso} from "@modules/configuracion/curso/models/curso";
//import {ConfirmDialogService} from "../../../../../../shared";

@Component({
    selector: 'app-curso-edit',
    template: `
        <sb-layout-dashboard>
            <sb-dashboard-head title="Nuevo Curso" [hideBreadcrumbs]="false"></sb-dashboard-head>
            <sb-card>
                <div class="card-body">
                    <form [formGroup]="cursoForm">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">Curso.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <input type="text" class="form-control form-control-sm"
                                               formControlName="nombre"
                                               id="nombre"
                                               placeholder="Curso">
                                    </div>

                                </div>
                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">Crédito.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <input type="text" class="form-control form-control-sm"
                                               formControlName="credito"
                                               id="credito"
                                               placeholder="Crédito">
                                    </div>

                                </div>

                            </div>
                            <div class="col-md-6">
                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">Grados.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <select class="form-control form-control-sm" formControlName="grado_id">

                                            <option *ngFor="let d of grados" [value]="d.id">{{ d.nombre }} {{d.seccion}}</option>
                                        </select>
                                    </div>

                                </div>

                                <div class="form-group row required">
                                    <div class="input-group input-group-sm col-sm-3">
                                        <label class="col-form-label">Personas.</label>
                                    </div>
                                    <div class="col-sm-9 input-group input-group-sm input-group-rounded">
                                        <select class="form-control form-control-sm" formControlName="persona_id">

                                            <option *ngFor="let d of personas" [value]="d.id">{{ d.nombres }} {{d.apellidos}}</option>
                                        </select>
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
                        <button class="btn btn-success btn-sm ml-3" [disabled]="cursoForm.invalid" (click)="onSave()">
                            <i class="fa fa-plus-square-o"></i> <span
                            class="fa fa-plus-square-o"></span> Guardar
                        </button>
                    </div>
                </div>
            </sb-card>
        </sb-layout-dashboard>



    `
})
export class CursoEditComponent implements OnInit {
    cursoForm = new FormGroup({
        nombre: new FormControl('', [Validators.required]),
        credito: new FormControl('', [Validators.required]),
        grado_id: new FormControl('', [Validators.required]),
        persona_id: new FormControl('', [Validators.required]),

    });

    private error: string = '';

    public grados:Grado[]=[];
    public personas:Persona[]=[];
    public curso: Curso={};
    public  cursoId: number=0;

    constructor(private cursoService: CursoService,
                private gradoService: GradoService,
                private personaService: PersonaService,
                private router: Router,
                private activatedRoute: ActivatedRoute,
    ) {
    }

    ngOnInit() {
        this.getGrados();
        this.getPersonas();
        this.activatedRoute.params.subscribe(res => {
            this.cursoId = res.cursoId;
            this.getCursoById(this.cursoId);
        });
    }

    public getCursoById(cursoId:number):void{
        this.cursoService.getById$(cursoId.toString()).subscribe(response=>{
            this.curso=response.data;
            this.patchValue(this.curso);
        });
    }
    public patchValue(curso:Curso):void{
    this.cursoForm.patchValue({
            nombre: curso.nombre,
        credito: curso.credito,
        grado_id: curso.grado_id,
        persona_id: curso.persona_id
    });}

    public getGrados(): void{
        this.gradoService.getAll$().subscribe(response=>{
            this.grados=response.data;
        });
    }

    public getPersonas(): void{
        this.personaService.getAll$().subscribe(response=>{
            this.personas=response.data;
        });
    }

    public onSave(): void {
        if (this.cursoForm.valid) {
            console.log(this.cursoForm.value);
            this.cursoService.update$(this.cursoId.toString(),this.cursoForm.value).subscribe(response => {
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
