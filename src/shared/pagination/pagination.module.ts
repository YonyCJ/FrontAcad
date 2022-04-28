/**
 * Reveal Pagination component.
 *
 * @example
 *
 * ```
 *  private saveSale(result: any) {
 *      console.log('PODENOS GUARDAR');
 *  }
 *  private cancel(reason: any) {
 *      console.log('SE CANCELÓ');
 *   }
 * ```
 */
import { NgModule } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginationComponent } from './pagination.component';
import { CommonModule } from '@angular/common';
export { Pagination } from './pagination.component';
@NgModule({
    imports: [
        CommonModule,
        NgbPaginationModule,
    ],
    exports: [
        PaginationComponent,
    ],
    declarations: [
        PaginationComponent,
    ],
    providers: [
    ],
})
export class PaginationModule { }
