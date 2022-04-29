import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "@app/providers/services/oauth";
import {Router} from "@angular/router";


@Component({
    selector: 'sb-login',
    //changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
    loginForm = new FormGroup({
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
    });

    constructor(private authService: AuthService,
                public router: Router,
    ) {
    }

    ngOnInit() {
        if (this.authService.getAccessToken()) {
            this.redirectInto();
        }
    }

    onLoggedin(): void {
        if (this.loginForm.valid) {
            this.authService.authenticate(this.loginForm.value).subscribe(response => {
                if (response && this.authService.getAccessToken()) {
                    this.redirectInto();
                }
            });
        }

    }

    redirectInto() {
        this.router.navigate(['dashboard']);
    }
}
