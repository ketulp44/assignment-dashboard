import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService } from './auth-guard.service';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full', canActivate: [AuthGuardService] },
     {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService] }
  ];