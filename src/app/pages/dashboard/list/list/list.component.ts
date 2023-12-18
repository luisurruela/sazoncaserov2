import { Component, OnInit } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapPlusCircle } from '@ng-icons/bootstrap-icons';
import { NavbarComponent } from '../../components/navbar/navbar/navbar.component';
import { ActivatedRoute } from '@angular/router';
import { ProductType } from './types/product-types';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NavbarComponent, NgIconComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  viewProviders: [provideIcons({ bootstrapPlusCircle })]
})
export class ListComponent implements OnInit {
  type = '';
  productType = ProductType;

  constructor(private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.type = params['type'];
    });
  }
}
