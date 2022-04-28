import {Component, OnInit, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {MESSAGES} from '../messages';
import {ToolsService} from "@app/providers/forms/tools.service";

@Component({
    selector: 'app-form-validate-errors',
    template: `
        <small *ngIf="mustShowErrors()" class="float-right" [ngClass]="{'text-error': mustShowErrors() }">
            {{ getMsmError }}
        </small>
    `,
    styles: [
        `
            .text-error {
                color: #f62d51;
                font-weight: bold;
                font-size: 10px;
            }
        `,
    ],
})

export class FormValidateErrorsComponent implements OnInit {

    @Input() controlName: string = '';
    @Input() group: FormGroup = new FormGroup({});


    constructor(private toolService: ToolsService) {
    }

    ngOnInit() {
    }

    public getControlErrors(): any {
        return this.toolService.getControlErrors(this.group, this.controlName);
    }

    public mustShowErrors(): boolean {
        return this.toolService.mustShowErrors(this.group, this.controlName);
    }

    get getMsmError() {
        const hasError = this.getControlErrors();
        if (hasError.required) {
            return MESSAGES.formValidators.required;
        } else if (hasError.minlength) {
            return `${MESSAGES.formValidators.minlengthRequiredLength}${hasError.minlength.requiredLength}
            ${MESSAGES.formValidators.minlengthActualLength}${hasError.minlength.actualLength}`;
        } else if (hasError.maxlength) {
            return `${MESSAGES.formValidators.maxlengthRequiredLength}${hasError.maxlength.requiredLength}
            ${MESSAGES.formValidators.maxlengthActualLength}${hasError.maxlength.actualLength}`;
        } else if (hasError.email) {
            return MESSAGES.formValidators.email;
        } else if (hasError.min) {
            return `${MESSAGES.formValidators.minRequired}${hasError.min.min}
            ${MESSAGES.formValidators.minActual}${hasError.min.actual}`;
        } else if (hasError.max) {
            return `${MESSAGES.formValidators.maxRequired}${hasError.max.max}
            ${MESSAGES.formValidators.maxActual}${hasError.max.actual}`;
        } else if (hasError.number) {
            return MESSAGES.formValidators.number;
        } else if (hasError.uppercase) {
            return MESSAGES.formValidators.uppercase;
        } else if (hasError.lowercase) {
            return MESSAGES.formValidators.lowercase;
        } else if (hasError.empty) {
            return MESSAGES.formValidators.empty;
        } else if (hasError.positiveNumber) {
            return MESSAGES.formValidators.positiveNumber;
        } else {
            return MESSAGES.formValidators.other;
        }
    }
}


