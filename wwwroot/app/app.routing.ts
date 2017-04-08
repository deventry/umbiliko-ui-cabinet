import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'directory', loadChildren: './directory/directory.module#DirectoryModule', pathMatch: 'full' }
    //{ path: 'booking/**', loadChildren: './core/core.module#CoreModule' },
    //{ path: 'contact', loadChildren: './contact/contact.module#ContactModule' }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
