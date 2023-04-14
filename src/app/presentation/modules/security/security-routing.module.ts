import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoGoogleAuthGuard } from '@presentation/shared/guards/no-login-auth.guard';
import { LoginComponent } from './components/login/login.component';
import { SecurityComponent } from './pages/security/security.component';
const routes: Routes = [
  {
    path: '',
    component: SecurityComponent,
    children: [
      {
        path: 'login',
        canActivate: [NoGoogleAuthGuard],
        component: LoginComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecurityRoutingModule {}
