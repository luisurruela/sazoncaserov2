import { Component, OnInit } from '@angular/core';
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
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  buttonState = true;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.username.trim() === 'luisurruela' && this.password.trim() === '123123') {
      this.router.navigate(['/home']);
    }
  }
}
