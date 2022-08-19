import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Curso } from '../../models/curso';


@Component({
    selector: 'app-curso-list',
    template: `
        <div>
            <div class="row">
                <div class="form-group col-md-12 text-right">
                    <button class="btn btn-primary btn-sm" (click)="onNew()"><i class="fa fa-plus-square-o"></i> <span
                        class="fa fa-plus-square-o"></span> Nuevo Curso
                    </button>
                </div>
            </div>
            <div class="responsive-table">
                <table class="table table-bordered table-sm table-hover">
                    <thead>
                    <tr>
                        <th class="text-center" scope="col">#</th>
                        <th scope="col">Id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Crédito</th>
                        <th scope="col">Grado</th>
                        <th scope="col">Docente</th>

                        <th scope="col">Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr *ngFor="let r of cursos; let i= index">
                        <th scope="row">{{i + 1}}</th>


                        <td data-title="Id">{{r.id}}</td>
                        <td data-title="Nombre">{{r.nombre}}</td>
                        <td data-title="Crédito">{{r.credito}}</td>
                        <td data-title="Grado">{{r.grado_id}}</td>
                        <td data-title="Docente">{{r.persona_id}}</td>


                        <td data-title="Acciones">
                            <div class="container">
                                <div class="row">
                                    <div class="col text-center">
                                        <button type="button" class="btn btn-labeled btn-success btn-group-sm" title="Editar"
                                                (click)="onEdit(r.id)">
                                                <i class="nc-icon ui-1_pencil h5 mb-0"></i>
                                        </button>
                                        <button type="button" class="btn btn-labeled btn-danger btn-group-sm" title="Eliminar"
                                                (click)="onDelete(r.id)">
                                                <i class="nc-icon ui-1_trash h5 mb-0"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>`
})

export class CursoListComponent implements OnInit {
    @Input() cursos: Curso[] = [];
    @Output() eventNew = new EventEmitter<boolean>();
    @Output() eventEdit = new EventEmitter<number>();
    @Output() eventDelete = new EventEmitter<number>();

    constructor() {

    }

    ngOnInit() {
    }

    public onNew() {
        this.eventNew.emit(true);
    }

    public onEdit(id: number) {
        this.eventEdit.emit(id);
    }

    public onDelete(id: number) {
        this.eventDelete.emit(id);
    }


}
