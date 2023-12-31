import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapArrowLeftShort } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-my-account',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIconComponent],
  templateUrl: './my-account.component.html',
  styleUrl: './my-account.component.scss',
  viewProviders: [provideIcons({ bootstrapArrowLeftShort })]
})
export class MyAccountComponent {

}
