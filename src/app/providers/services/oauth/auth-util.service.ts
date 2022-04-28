import {Router} from '@angular/router';
import {Token, User} from "@app/providers/services/models/User";
import {inflate, ungzip} from 'pako'
import {any} from "codelyzer/util/function";

export class AuthUtilService {

    token: any

    constructor() {
    }

    parseJwt(): Token {
        const base64Url = this.token.split('.')[1]
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
        const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
        }).join(''))
        return JSON.parse(jsonPayload)
    }

    parseUserData(): User {
        const base64Data = this.parseJwt().usuario
        const compressData = atob(base64Data)
        const comp = compressData.split('').map(function (e) {
            return e.charCodeAt(0)
        })
        const binData = new Uint8Array(comp)
        const uint16Array = new Uint16Array(inflate(binData));
        const dataArray: any[] = uint16Array.toString().split(',');
        const data = String.fromCharCode.apply(null, dataArray);
        console.log(JSON.parse(data));
        return JSON.parse(data)
    }

}
