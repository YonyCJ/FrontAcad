import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from '@modules/logistics/catalogue/category/models/category';

@Component({
    selector: 'app-category-list',
    template: `
        <div>
            <div class="row">
                <div class="form-group col-md-12 text-right">
                    <button class="btn btn-primary btn-sm" (click)="onNew()"><i class="fa fa-plus-square-o"></i> <span
                        class="fa fa-plus-square-o"></span> Nueva Categoría
                    </button>
                </div>
            </div>
            <div class="responsive-table">
                <table class="table table-bordered table-sm table-hover">
                    <thead>
                    <tr>
                        <th class="text-center" scope="col">#</th>
                        <th scope="col">Categoría</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Código</th>
                        <th scope="col">Fecha Actualización</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr *ngFor="let r of categorys; let i= index">
                        <th scope="row">{{i + 1}}</th>
                        <td data-title="Categoría">{{r.name}}</td>
                        <td data-title="Descripción">{{r.description}}</td>
                        <td data-title="Código">{{r.code}}</td>
                        <td data-title="Fecha Actualización">{{r.modificationDate|date:'short'}}</td>
                        <td data-title="Estado">
                        <span class="badge badge-pill {{ r.state? 'badge-primary': 'text-danger' }}">
                            {{ r.state ? 'Activo' : 'Inactivo' }}
                        </span>
                        </td>
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

export class CategoryListComponent implements OnInit {
    @Input() categorys: Category[] = [];
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
