import {Injectable} from '@angular/core';
import {
    HttpRequest,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpHeaders,
    HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../../../src/environments/environment';
import {AuthService} from "@app/providers/services/oauth";
import {catchError} from 'rxjs/operators';
import {NotificationService} from '../services/notifications/notification.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
    private token: any = 'InitialAuthorizationToken';
    private header: any;

    constructor(
        private authService: AuthService,
        private notificationService: NotificationService
    ) {
    }

    private subscribeToTokenChanges() {
        this.token = this.authService.getAccessToken();
    }

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.subscribeToTokenChanges();
        //const authorizationReq = this.token ? this.setAuthHeader(req) : req;
        const authorizationReq = this.setAuthHeader(req);
        const urlReq = this.setUrl(authorizationReq);
        const handleRequest = next.handle(urlReq);
        return handleRequest.pipe(
            catchError((error: HttpErrorResponse) => {
                if (error.status !== 401) {
                    if (error.error.message) {
                        this.notificationService.notify(error.status, error.error.message, error.error.type)
                    } else {
                        this.notificationService.notify(error.status, error.error.error)
                    }
                }
                return throwError(error)
            }));
    }

    private setAuthHeader(req: HttpRequest<any>): HttpRequest<any> {
        const authorization = this.token;
        if (this.token) {
            this.header = req.headers
                .set('Authorization', 'Bearer ' + authorization)
                .set('Content-Type', 'application/json');

        } else {
            this.header = req.headers
                .set('Content-Type', 'application/json');

        }
        const authorizationReq = req.clone({headers: this.header});
        return authorizationReq;
    }

    private setUrl(req: HttpRequest<any>): HttpRequest<any> {
        if (!req.url.includes('assets/')) {
            return req.clone({url: `${environment.url}${req.url}`});
        } else {
            return req.clone({url: `${req.url}`});
        }

    }

}
