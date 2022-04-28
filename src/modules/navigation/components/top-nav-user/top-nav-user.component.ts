import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AuthService} from "@app/providers/services/oauth";
import {Router} from "@angular/router";


@Component({
    selector: 'sb-top-nav-user',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './top-nav-user.component.html',
    styleUrls: ['top-nav-user.component.scss'],
})
export class TopNavUserComponent implements OnInit {
    constructor(public authService: AuthService, public router: Router,
    ) {
    }

    ngOnInit() {
    }

    public logout(): void {
        this.authService.clearAll();
        if (!this.authService.getAccessToken()) {
            this.router.navigate(['auth/login']);
        }

    }
}
