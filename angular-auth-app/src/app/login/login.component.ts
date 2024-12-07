import { Component } from '@angular/core';
import { AuthService } from '../auth.service'; //CC

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService) { }

  login() {
    const isAuthenticated = this.authService.login(this.username, this.password);
    if (!isAuthenticated) {
      this.errorMessage = 'Invalid username or password';
    }
  }
}
