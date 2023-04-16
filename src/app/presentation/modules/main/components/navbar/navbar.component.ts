import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Delegate } from '@application/delegate';
import { SwalService } from '@presentation/shared/services/swal.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  localStorage(): boolean {
    if (localStorage.getItem('id')) return true;
    return false;
  }
  constructor(
    private readonly delegate: Delegate,
    private readonly router: Router,
    private readonly swal: SwalService
  ) {}

  logOut(): void {
    this.delegate.toLogout();
    this.delegate.execute().subscribe({
      error: (error) => {
        this.swal.toFire('Error', error.message, 'error');
      },
      complete: () => {
        this.swal.toFire(
          'Success',
          'Has cerrado sesión correctamente',
          'success'
        );
        this.router.navigate(['/']);
      },
    });
  }
}
