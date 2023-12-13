import { Component } from '@angular/core';
import { NavbarComponent } from '../../../pages/dashboard/components/navbar/navbar/navbar.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapPlusCircle } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NavbarComponent, NgIconComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  viewProviders: [provideIcons({ bootstrapPlusCircle })]
})
export class ListComponent {

}
