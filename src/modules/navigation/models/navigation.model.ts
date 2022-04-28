export interface SBRouteData {
    title?: string;
    activeTopNav?: string;
    breadcrumbs: Breadcrumb[];
}

export interface Breadcrumb {
    text: string;
    link?: string;
    active?: boolean;
}

export interface SideNavItems {
    [index: string]: SideNavItem;
}

export interface SideNavItem {
    codigo: string;
    icono?: string;
    menu: string;
    deUri?: string;
    subMenu?: SideNavItem[];
}

export interface SideNavSection {
    text?: string;
    items: string[];
}
