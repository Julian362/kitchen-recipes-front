import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Delegate } from '@application/delegate';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private readonly delegate: Delegate,
    private readonly router: Router
  ) {}

  login(): void {
    this.delegate.toLogin();
    this.delegate.execute().subscribe({
      next: (value) => console.log(value),
      error: (error) => console.log(error),
      complete: () => {
        this.router.navigate(['/recipe']);
      },
    });
  }
}
