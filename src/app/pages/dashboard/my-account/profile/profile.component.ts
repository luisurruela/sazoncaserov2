import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { bootstrapArrowLeftShort } from '@ng-icons/bootstrap-icons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIconComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  viewProviders: [provideIcons({ bootstrapArrowLeftShort })]
})
export class ProfileComponent {

}
