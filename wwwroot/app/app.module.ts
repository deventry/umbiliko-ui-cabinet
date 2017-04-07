import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* App Root */
import { AppComponent } from './app.component';

/* Feature Modules */
//import { CoreModule } from './core/core.module';
//import { AirlineModule } from './airline/airline.module';
import { routing, appRoutingProviders } from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        //CoreModule.forRoot({ userName: 'Miss Marple' }),
        routing
    ],
    providers: [appRoutingProviders],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}