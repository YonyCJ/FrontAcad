import {Injectable} from '@angular/core';
import {FormGroup, AbstractControl} from '@angular/forms';

@Injectable()
export class ToolsService {

    constructor() {
    }

    public getControl(form: FormGroup, controlName: string): AbstractControl {
        return form.controls[controlName];
    }

    public hasChanges(control: AbstractControl): boolean {
        return control && (control.dirty || control.touched);
    }

    public mustShowErrors(form: FormGroup, controlName: string) {
        let hasErrorsToShow = false;
        const control = this.getControl(form, controlName);
        if (this.hasChanges(control)) {
            hasErrorsToShow = control.errors != null;
        }
        return hasErrorsToShow;
    }

    public getControlErrors(form: FormGroup, controlName: string): Object {
        const control = this.getControl(form, controlName);
        return control ;
    }

}
