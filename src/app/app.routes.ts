import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NavidadComponent } from './pages/navidad/navidad.component';
import { LoginComponent } from './pages/login/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { ListComponent } from './dashboard/list/list/list.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'dashboard/list', component: ListComponent },
    { path: 'home', component: HomeComponent },
    { path: 'navidad', component: NavidadComponent },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' } 
];
