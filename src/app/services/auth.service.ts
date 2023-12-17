import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, Auth, signInWithEmailAndPassword, signOut, updateProfile, AuthError } from '@angular/fire/auth';
import { userProfile } from '../pages/dashboard/dashboard/types/user-profile';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;
  userData: any;
  errorMessage = '';

  constructor(
    private router: Router,
    private auth: Auth
  ) {}

  async login(email: string, password: string): Promise<any> {
    try {
      const res = await signInWithEmailAndPassword(this.auth, email, password);
      this.userData = res.user;
      this.isLoggedIn = true;
      this.router.navigate(['/dashboard']);
    } catch (e) {
      return (e as AuthError).code;
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

  user() {
    return this.auth.currentUser;
  }

  changeUserProfile(userProfile: userProfile) {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      updateProfile(auth.currentUser, userProfile).then(response => {
        console.log(response);
      });
    }
  }
  
}