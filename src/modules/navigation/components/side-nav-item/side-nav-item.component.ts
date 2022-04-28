import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { SBRouteData, SideNavItem } from '@modules/navigation/models';

@Component({
    selector: 'sb-side-nav-item',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './side-nav-item.component.html',
    styleUrls: ['side-nav-item.component.scss'],
})
export class SideNavItemComponent implements OnInit {
    @Input() sideNavItem!: SideNavItem;
    @Input() isActive!: boolean;
    @Input() isSubMenu: boolean = false;

    expanded = false;
    routeData!: SBRouteData;

    constructor() {}
    ngOnInit() {}

    compareRoute(): boolean {
        if(this.sideNavItem.deUri?.length == 1){
            return false
        }
        return true
    }
    
    compareIcon(): boolean {
        if (this.sideNavItem.icono?.length == 2 || this.sideNavItem.icono?.length == 1) {
            return false
        }
        return true
    }
}
