import {Component, OnInit} from '@angular/core';
import {MatriculaService} from "@app/providers/services/matricula/matricula/matricula.service";

import {ActivatedRoute, Router} from "@angular/router";
import { Matricula } from '../models/matricula';

@Component({
    selector: 'app-matricula-containers',
    template: `
        <sb-layout-dashboard>
            <sb-dashboard-head title="Matriculas" [hideBreadcrumbs]="false"></sb-dashboard-head>
            <sb-card>
                <div class="card-body">
                    <app-matricula-list [matriculas]="matriculas" (eventNew)="eventNew($event)"
                                      (eventEdit)="eventEdit($event)" (eventDelete)="onDeleteMatricula($event)"></app-matricula-list>
                </div>
            </sb-card>
        </sb-layout-dashboard>`
})

export class MatriculaContainerComponent implements OnInit {
    public matriculas: Matricula[] = [];

    private error: string = '';

    constructor(private matriculaService: MatriculaService,
                private router: Router,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {

        this.getMatriculas();
    }

public onDeleteMatricula(matriculaId: number):void{
this.matriculaService.delete$(matriculaId.toString()).subscribe(response=>{
    this.getMatriculas();
});

}
    public getMatriculas(): void {
        this.matriculaService.getAll$().subscribe(response => {
            this.matriculas = response.data;
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
        this.router.navigate(['edit', {matriculaId: $event}], {relativeTo: this.activatedRoute});
    }
}
