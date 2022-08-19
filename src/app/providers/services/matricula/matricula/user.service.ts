import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {END_POINTS, EntityDataService} from '../../../utils';

@Injectable({providedIn: 'root'})
export class UserService extends EntityDataService<any> {
    constructor(protected httpClient: HttpClient) {
        super(httpClient, END_POINTS.configuracion.curso.user);
    }
}
