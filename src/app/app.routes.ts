import { Routes } from '@angular/router';
import { NavidadComponent } from './pages/navidad/navidad.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'navidad', component: NavidadComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' } 
];
