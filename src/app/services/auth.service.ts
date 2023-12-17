import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;
  userData: any;

  constructor(
    private router: Router,
    private auth: Auth
  ) {}

  async login(email: string, password: string): Promise<void> {
    try {
      const res = await signInWithEmailAndPassword(this.auth, email, password);
      this.userData = res.user;
      this.isLoggedIn = true;
      this.router.navigate(['/dashboard']);
    } catch (e) {
      return console.log(e);
    }
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  logout(): void {
    signOut(this.auth).then(() => {
      this.isLoggedIn = false;
      this.router.navigate(['/']);
    });
  }
  
}