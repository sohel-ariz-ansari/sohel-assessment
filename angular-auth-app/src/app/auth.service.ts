import { Injectable } from '@angular/core';
import { Router } from '@angular/router'; 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Static username and password
  private readonly validUsername = 'admin';
  private readonly validPassword = 'admin123';

  constructor(private router: Router) { }

   // Check login credentials
   login(username: string, password: string): boolean {
    if (username === this.validUsername && password === this.validPassword) {
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/dashboard']);
      return true;
    }
    return false;
  }

  // Check if user is logged in
  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  // Logout function
  logout(): void {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }
}
