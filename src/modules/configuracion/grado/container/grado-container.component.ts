import {Component, OnInit} from '@angular/core';
import {CursoService} from "@app/providers/services/configuracion/curso";

import {ActivatedRoute, Router} from "@angular/router";
import { Curso } from '../models/curso';
import {Persona} from "@modules/configuracion/curso/models/persona";
import {PersonaService} from "@app/providers/services/configuracion/curso/persona.service";

@Component({
    selector: 'app-persona-containers',
    template: `
        <sb-layout-dashboard>
            <sb-dashboard-head title="Categorias de Artículos" [hideBreadcrumbs]="false"></sb-dashboard-head>
            <sb-card>
                <div class="card-body">
                    <app-persona-list [personas]="personas" (eventNew)="eventNew($event)"
                                    (eventEdit)="eventEdit($event)" (eventDelete)="onDeletePersona($event)"></app-persona-list>
                </div>
            </sb-card>
        </sb-layout-dashboard>`
})

export class PersonaContainerComponent implements OnInit {
    public personas: Persona[] = [];

    private error: string = '';

    constructor(private personaService: PersonaService,
                private router: Router,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {

        this.getPersonas();
    }

public onDeletePersona(personaId: number):void{
this.personaService.delete$(personaId.toString()).subscribe(response=>{
    this.getPersonas();
});

}
    public getPersonas(): void {
        this.personaService.getAll$().subscribe(response => {
            this.personas = response.data;
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
        this.router.navigate(['edit', {personaId: $event}], {relativeTo: this.activatedRoute});
    }
}
