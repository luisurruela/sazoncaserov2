import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  displayName: string | null | undefined = '';

  constructor(
    private auth: AuthService
  ) {
    this.displayName = this.auth.user()?.displayName;
  }

  logout() {
    this.auth.logout();
  }
}
