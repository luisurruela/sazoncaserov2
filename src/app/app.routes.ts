import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NavidadComponent } from './pages/navidad/navidad.component';
import { LoginComponent } from './pages/login/login/login.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'navidad', component: NavidadComponent },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' } 
];
