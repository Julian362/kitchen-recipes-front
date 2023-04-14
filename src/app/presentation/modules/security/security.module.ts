import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { SecurityComponent } from './pages/security/security.component';
import { SecurityRoutingModule } from './security-routing.module';

@NgModule({
  declarations: [SecurityComponent, LoginComponent],
  imports: [CommonModule, SecurityRoutingModule],
})
export class SecurityModule {}
