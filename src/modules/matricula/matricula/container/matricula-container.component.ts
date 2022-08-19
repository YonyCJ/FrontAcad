import {Component, OnInit} from '@angular/core';
import {CursoService} from "@app/providers/services/configuracion/curso";

import {ActivatedRoute, Router} from "@angular/router";
import { Curso } from '../models/curso';

@Component({
    selector: 'app-matricula-containers',
    template: `
        <sb-layout-dashboard>
            <sb-dashboard-head title="Categorias de Artículos" [hideBreadcrumbs]="false"></sb-dashboard-head>
            <sb-card>
                <div class="card-body">
                    <app-curso-list [cursos]="cursos" (eventNew)="eventNew($event)"
                                       (eventEdit)="eventEdit($event)" (eventDelete)="onDeleteCurso($event)"></app-curso-list>
                </div>
            </sb-card>
        </sb-layout-dashboard>`
})

export class CursoContainerComponent implements OnInit {
    public cursos: Curso[] = [];

    private error: string = '';

    constructor(private cursoService: CursoService,
                private router: Router,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {

        this.getCursos();
    }

public onDeleteCurso(cursoId: number):void{
this.cursoService.delete$(cursoId.toString()).subscribe(response=>{
    this.getCursos();
});

}
    public getCursos(): void {
        this.cursoService.getAll$().subscribe(response => {
            this.cursos = response.data;
            console.log(response);
        }, error => {
            this.error = error;
        });
    }

    public eventNew($event: boolean): void {
        if ($event) {
            this.router.navigate(['new'], {relativeTo: this.activatedRoute});
        }

    }

    public eventEdit($event: number): void {
        this.router.navigate(['edit', {cursoId: $event}], {relativeTo: this.activatedRoute});
    }
}
