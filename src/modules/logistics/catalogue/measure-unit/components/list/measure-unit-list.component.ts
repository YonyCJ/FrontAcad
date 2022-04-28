import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MeasureUnit} from "@modules/logistics/catalogue/measure-unit/models/measure-unit";

@Component({
    selector: 'app-measure-unit-list',
    template: `
        <div>
            <div class="row">
                <div class="form-group col-md-12 text-right">
                    <button class="btn btn-primary btn-sm" (click)="onNew()"><i class="fa fa-plus-square-o"></i> <span
                        class="fa fa-plus-square-o"></span> Nueva Unidad de medida
                    </button>
                </div>
            </div>
            <div class="responsive-table">
                <table class="table table-bordered table-sm table-hover">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Unidad de medida</th>
                        <th scope="col">Simbolo</th>
                        <th scope="col">Simbolo de impresion</th>
                        <th scope="col">Fecha Actualización</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr *ngFor="let r of measureUnits; let i= index">
                        <th scope="row">{{i + 1}}</th>
                        <td data-title="Unidade de medida">{{r.name}}</td>
                        <td data-title="Simbolo">{{r.symbol}}</td>
                        <td data-title="Simbolo de impresion">{{r.symbolPrint}}</td>
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
                                        <button type="button" class="btn btn-labeled btn-success btn-group-sm"
                                                title="Editar"
                                                (click)="onEdit(r.id)">
                                            <i class="nc-icon ui-1_pencil h5 mb-0"></i>
                                        </button>
                                        <button type="button" class="btn btn-labeled btn-danger btn-group-sm"
                                                title="Eliminar"
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

export class MeasureUnitListComponent implements OnInit {
    @Input() measureUnits: MeasureUnit[] = [];
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
