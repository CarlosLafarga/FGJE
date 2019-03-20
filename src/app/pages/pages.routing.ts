import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PagesComponent } from './pages.component';
import { BlankComponent } from './blank/blank.component';
import { SearchComponent } from './search/search.component';
import { AuthGuard } from './auth/auth.guard';
import { UsuariosComponent } from './usuarios/usuarios.component';


export const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'membership', loadChildren: 'app/pages/membership/membership.module#MembershipModule', data: { breadcrumb: 'Cambio de adscripción' } , canActivate:[AuthGuard]},
            { path: 'blank', component: BlankComponent, data: { breadcrumb: 'Blank page' } },
            { path: 'usuarios', component: UsuariosComponent, data: { breadcrumb: 'Usuarios' } , canActivate: [AuthGuard]},
       ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);