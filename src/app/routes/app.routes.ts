import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { AppExample } from '../example/app.example';
import { AppExample1 } from '../example1/app.example1';

export const routes: Routes = [
{
        path: 'home',
        component: AppExample
    },
    {
        path: 'app1', 
        component: AppExample1
    },
    { 
        path: '**',
        redirectTo: 'home'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);