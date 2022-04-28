import {Menu} from "@app/providers/services/models/Menu";
export interface Token {

    user_name:   string
    scope:       string[]
    usuario:     string
    exp:         number
    authorities: string[]
    jti:         string
    client_id:   string

}
export interface User {
    paterno?: string
    sede?: string
    idUsuario?: number
    espwd?: boolean
    menu?: Menu[]
    nombre?: string
    nombres?: string
    materno?: string
    foto?: string
    celular?: string
    usuario?: string
    idSede?: string
    sexo?: string
    cargo?: string
    empresa?: string
    email?: string
    idPersona?: string
    acciones?: string[]

}
export interface Auth {

    access_token:  string
    token_type:    string
    refresh_token: string
    expires_in:    number
    scope:         string
    usuario:       string
    jti:           string

}
