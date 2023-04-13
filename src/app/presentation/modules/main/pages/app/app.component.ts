import { Component } from '@angular/core';
import { Delegate } from '../../../../../application/delegate/delegate.delegate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private readonly delegate: Delegate) {}

  login(): void {
    this.delegate.toLogin();
    this.delegate.execute().subscribe({
      next: (value) => console.log(value),
      error: (error) => console.log(error),
      complete: () => console.log('complete'),
    });
  }

  logOut(): void {
    this.delegate.toLogout();
    this.delegate.execute();
  }
}
