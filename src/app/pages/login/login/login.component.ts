import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LogoComponent } from '../../../components/logo/logo.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, LogoComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  formIsValid = false;

  constructor(private router: Router) {
  }

  onChange() {
    this.formIsValid = this.username.trim().length > 0 && this.password.trim().length > 0;
  }

  submit() {
    if (this.username.trim() === 'luisurruela' && this.password.trim() === '123123') {
      this.router.navigate(['/dashboard']);
    }
  }
}
