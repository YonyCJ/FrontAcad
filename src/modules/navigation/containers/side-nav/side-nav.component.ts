import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
//import { UserService } from '@modules/auth/services';
import { SideNavItems, SideNavSection, SideNavItem } from '@modules/navigation/models';
import { NavigationService } from '@modules/navigation/services';
import { Subscription } from 'rxjs';
declare const $:any;

@Component({
    selector: 'sb-side-nav',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './side-nav.component.html',
    styleUrls: ['side-nav.component.scss'],
})
export class SideNavComponent implements OnInit, OnDestroy {
    @Input() sidenavStyle!: string;
    @Input() sideNavSections!: SideNavSection[];
    @Input() sideNavItems!: SideNavItem[];
    @Input() fullName!: string[];


    subscription: Subscription = new Subscription();
    routeDataSubscription!: Subscription;

    constructor(public navigationService: NavigationService//, public userService: UserService
    ) {}

    ngOnInit() {}

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }


    hideMenu() {
        $('.navbar-toggle').click()
      }

}
