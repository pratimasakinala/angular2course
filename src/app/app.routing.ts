import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const appRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/lessons/1'
    }
];

export const AppRouting = RouterModule.forRoot(appRoutes, {useHash: true});