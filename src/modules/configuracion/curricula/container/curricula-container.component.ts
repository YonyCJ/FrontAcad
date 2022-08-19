import {Component, OnInit} from '@angular/core';
import {CursoService} from "@app/providers/services/configuracion/curso";

import {ActivatedRoute, Router} from "@angular/router";
import { Curso } from '../models/curso';
import {Persona} from "@modules/configuracion/curso/models/persona";
import {PersonaService} from "@app/providers/services/configuracion/curso/persona.service";
import {GradoService} from "@app/providers/services/configuracion/curso/grado.service";
import {Grado} from "@modules/configuracion/grado/models/grado";

@Component({
    selector: 'app-grado-containers',
    template: `
        <sb-layout-dashboard>
            <sb-dashboard-head title="Grados" [hideBreadcrumbs]="false"></sb-dashboard-head>
            <sb-card>
                <div class="card-body">
                    <app-grado-list [grados]="grados" (eventNew)="eventNew($event)"
                                    (eventEdit)="eventEdit($event)" (eventDelete)="onDeleteGrado($event)"></app-grado-list>
                </div>
            </sb-card>
        </sb-layout-dashboard>`
})

export class GradoContainerComponent implements OnInit {
    public grados: Grado[] = [];

    private error: string = '';

    constructor(private gradoService: GradoService,
                private router: Router,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {

        this.getGrados();
    }

public onDeleteGrado(gradoId: number):void{
this.gradoService.delete$(gradoId.toString()).subscribe(response=>{
    this.getGrados();
});

}
    public getGrados(): void {
        this.gradoService.getAll$().subscribe(response => {
            this.grados = response.data;
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
        this.router.navigate(['edit', {gradoId: $event}], {relativeTo: this.activatedRoute});
    }
}
