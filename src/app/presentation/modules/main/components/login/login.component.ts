import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Delegate } from '@application/delegate';
import { SwalService } from '@presentation/shared/services/swal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private readonly delegate: Delegate,
    private readonly router: Router,
    private readonly swal: SwalService
  ) {}

  login(): void {
    this.delegate.toLogin();
    this.delegate.execute().subscribe({
      error: (error) => this.swal.toFire('Error', error.message, 'error'),
      complete: () => {
        this.swal.toFire('Success', 'Login success', 'success');
        this.router.navigate(['/recipe']);
      },
    });
  }
}
