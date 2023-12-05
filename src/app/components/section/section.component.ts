import { Component, Input } from '@angular/core';
import { SectionConfig } from '../../pages/home/types/section-element';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss'
})
export class SectionComponent {
  @Input() config!: SectionConfig;
}
