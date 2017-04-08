import { NgModule, /*ApplicationRef,*/ Optional, SkipSelf } from '@angular/core';

import { CommonModule } from '@angular/common';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AppComponent } from '../app.component';

//import { routing } from './collections.routing';

@NgModule({
    imports: [CommonModule, NgxDatatableModule],
    declarations: [
        AppComponent,

        //GridComponent,
        //GridComponent
    ]
})
export class DirectoryModule {
    // Only the root AppModule should import the AirlineModule.
    constructor(@Optional() @SkipSelf() parentModule: DirectoryModule) {
        if (parentModule) {
            throw new Error(
                'CollectionsModule is already loaded. Import it in the AppModule only');
        }
    }
}
