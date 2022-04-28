import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { END_POINTS } from "@app/providers/utils";
import { HttpClient, HttpParams } from "@angular/common/http";
import { User } from "@modules/auth/models";
import { Auth } from "@app/providers/services/models/User";
import { map } from 'rxjs/operators';
import { inflate } from 'pako';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {}

    public authenticate(credentials: any): Observable<any> {
        const body = new HttpParams().set('username', credentials.username).set('password', credentials.password).set('grant_type', 'password')
        return this.http.post<any>(END_POINTS.oauth.login, body).pipe(map((data: Auth) => {
            if (data) {
                this.setSession(data);
            }
            return data
        }));
    }

    private setSession(response: any) {
        if (response) {
            const authorizationAccessToken = response && response.access_token || null;
            const authorizationRefreshToken = response && response.refresh_token || null;
            const authorizationUSer = response && response.usuario || null;
            this.setAccessToken(authorizationAccessToken);
            this.setRefreshToken(authorizationRefreshToken);
            this.setUser(authorizationUSer);

        } else {
            this.notAutorized(response.message);
        }
    }

    private notAutorized(error: any) {
        this.clearAll();
    }

    public setAccessToken(accessToken: string) {
        localStorage.setItem('access_token', accessToken);
    }

    public getAccessToken() {
        return localStorage.getItem('access_token');
    }

    public setTokenType(totenType: string) {
        localStorage.setItem('token_type', totenType);
    }

    public getTokenType() {
        return localStorage.getItem('token_type');
    }

    public setRefreshToken(refreshToken: string) {
        localStorage.setItem('refresh_token', refreshToken);
    }

    public getRefreshToken() {
        return localStorage.getItem('refresh_token');
    }

    public setUser(user: string) {
        localStorage.setItem('user', user);
    }

    public getUser() {
        return localStorage.getItem('user');
    }

    public clearAll() {
        localStorage.clear();
    }

    parseUserData(dataCompress:any): User {
        const base64Data = dataCompress
        const compressData = atob(base64Data)
        const comp = compressData.split('').map(function (e) {
            return e.charCodeAt(0)
        })
        const binData = new Uint8Array(comp)
        const uint16Array = new Uint16Array(inflate(binData));
        const dataArray: any[] = uint16Array.toString().split(',');
        const data = String.fromCharCode.apply(null, dataArray);
        return JSON.parse(data)
    }

}
