import {InjectionToken} from '@angular/core';

export class OauthStore {
    username?: any;
    accessToken?: any;
    authorizationCode?: any;
}

export class CredentialsApp {
    clientId?: string;
    clientSecret?: string;
    redirectUri?: string;
}

export const TOKEN_OAUTH_STORE = new InjectionToken<OauthStore>('Oauth Store');

