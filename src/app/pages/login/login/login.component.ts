import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LogoComponent } from '../../../components/logo/logo.component';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, LogoComponent, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage = '';

  constructor(
    private auth: AuthService
  ) {
  }

  onChange() {
    this.errorMessage = '';
  }

  submit() {
    this.auth.login(this.email, this.password).then(response => {
      console.log(response);
      if (response) {
        this.errorMessage = response;
      }
    });
  }
}
