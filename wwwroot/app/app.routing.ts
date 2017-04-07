import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    //{ path: '', loadChildren: './core/core.module#CoreModule', pathMatch: 'full' },
    //{ path: 'booking/**', loadChildren: './core/core.module#CoreModule' },
    //{ path: 'contact', loadChildren: './contact/contact.module#ContactModule' }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
