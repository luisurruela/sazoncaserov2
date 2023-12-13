import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NavidadComponent } from './pages/navidad/navidad.component';
import { LoginComponent } from './pages/login/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { ListComponent } from './pages/dashboard/list/list/list.component';
import { MyAccountComponent } from './pages/dashboard/my-account/my-account/my-account.component';
import { SettingsComponent } from './pages/dashboard/settings/settings/settings.component';
import { AuthGuard } from './guard/auth.guard';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'dashboard/list', component: ListComponent, canActivate: [AuthGuard] },
    { path: 'dashboard/account', component: MyAccountComponent, canActivate: [AuthGuard] },
    { path: 'dashboard/settings', component: SettingsComponent, canActivate: [AuthGuard] },
    { path: 'home', component: HomeComponent },
    { path: 'navidad', component: NavidadComponent },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' } 
];
