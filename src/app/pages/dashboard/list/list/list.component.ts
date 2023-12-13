import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapPlusCircle } from '@ng-icons/bootstrap-icons';
import { NavbarComponent } from '../../components/navbar/navbar/navbar.component';

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
