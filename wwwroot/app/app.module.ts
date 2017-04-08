import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

/* App Root */
import { AppComponent } from './app.component';

/* Feature Modules */
import { routing, appRoutingProviders } from './app.routing';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        NgxDatatableModule,
        routing
    ],
    providers: [appRoutingProviders]
})
export class AppModule {
}