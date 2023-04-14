import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Delegate } from '../../../../../application/delegate/delegate.delegate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private readonly delegate: Delegate,
    private readonly router: Router
  ) {}

  logOut(): void {
    this.delegate.toLogout();
    this.delegate.execute().subscribe({
      next: (value) => console.log(value),
      error: (error) => console.log(error),
      complete: () => {
        this.router.navigate(['/login']);
      },
    });
  }
}
