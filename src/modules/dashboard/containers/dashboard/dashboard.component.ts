import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AuthService} from "@app/providers/services/oauth";
import {Router} from "@angular/router";
import {User} from "@app/providers/services/models/User";


@Component({
    selector: 'sb-dashboard',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard.component.html',
    styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    userData: any;

    constructor(private authService: AuthService, public router: Router,) {
    }

    ngOnInit() {
        if (!this.authService.getAccessToken()) {
            this.redirectInto();
        }
    }

    redirectInto() {
        this.router.navigate(['auth/login']);
    }
}
