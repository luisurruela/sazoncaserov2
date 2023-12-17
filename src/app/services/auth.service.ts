import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;

  constructor(
    private router: Router
  ) {}

  login(username: string, password: string): boolean {
    if (username.trim() === 'luisurruela' && password.trim() === '123123') {
      this.isLoggedIn = true;
      this.router.navigate(['/dashboard']);
    }
    return this.isLoggedIn;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }
}