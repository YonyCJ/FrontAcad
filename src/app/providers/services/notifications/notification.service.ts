import { Injectable } from '@angular/core';import { Icon, Type } from './notification.enum';
declare const $: any;

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() {
  }

  notify(status: number, message: string, type?: string): void {
    switch(status) {
      // 0 - Unknown error
      case 0: {
        this.configAlert(Icon.error, 'El dominio de los servicios no está respondiendo', Type.error)
        break
      }
      // 500 - Internal server error
      case 500: {
        this.configAlert(Icon.error, 'Servicio no disponible', Type.error)
        break
      }
      // 401 - Unauthorized
      case 401: {
        if (message === 'unauthorized') {
          this.configAlert(Icon.warning, 'Tu sesión ha expirado', Type.warning)
        } else if (message === 'invalid_token') {
          this.configAlert(Icon.warning, 'Token inválido', Type.warning)
        }
        break
      }
      // 400 - Bad request
      case 400: {
        if (message === 'invalid_grant') {
          this.configAlert(Icon.error, 'Datos incorrectos', Type.error)
        } else if (message === 'El registro no existe!') {
          this.configAlert(Icon.warning, 'No se han encontrado datos', Type.warning)
        } else if (message === 'El Usuario no se encuentra registrado en el sistema.') {
          this.configAlert(Icon.warning, 'El usuario no se encuentra registrado en el sistema', Type.warning)
        } else if (message === 'El DNI ya existe!') {
          this.configAlert(Icon.warning, 'El DNI que ingresaste ya está registrado', Type.warning)
        } else if (message === 'Ya existe un Gestor con el mismo número de Documento') {
          this.configAlert(Icon.warning, 'El gestor ya se encuentra registrado', Type.warning)
        } else if (message === 'El password actual no coincide!') {
          this.configAlert(Icon.error, 'Contraseña actual incorrecta', Type.error)
        } else if (message === 'Las contraseñas no coinciden') {
          this.configAlert(Icon.error, 'Las contraseñas no coinciden', Type.error)
        } else if (message) {
          this.configAlert(type? (Icon as any)[type] : Icon.error, message, type? (Type as any)[type] : Type.error)
        }
        break
      }
      //* 404 - Not found
      case 404: {
        this.configAlert(Icon.error, message, Type.error)
        break
      }
      default: {
        this.configAlert(Icon.error, 'Error inesperado', Type.error)
        break
      }
    }
  }
  configAlert(icon: string, message: string, type: string): void {
    $.notify({
      icon: `nc-icon ${icon}`,
      message: message
    },
    {
      type: type,
      delay: 3000,
      allow_dismiss: false,
      placement: {
        from: 'bottom',
        align: 'right'
      }
    })
  }
}
