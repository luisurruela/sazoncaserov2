import { Component } from '@angular/core';
import { LogoComponent } from '../../components/logo/logo.component';
import { SectionComponent } from '../../components/section/section.component';
import { SectionConfig } from './types/section-element';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FooterComponent,
    SectionComponent,
    LogoComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  config = 
    {
      menu: {
        title: 'El menú de hoy',
        elements: [
          {
            name: 'Bisteces a la mexicana',
            description: 'Tradicionales Bisteces a la mexicana, con papa, tomate, cebolla',
            image: 'assets/images/default-image.jpg'
          },
          {
            name: 'Pollo horneado',
            description: 'Sabroso pollo horneado, con papa',
            image: 'assets/images/default-image.jpg'
          },
          {
            name: 'Chuletas con tocino y piña',
            description: 'Chuletas naturales de cerdo a la plancha, con tocino y piña',
            image: 'assets/images/default-image.jpg'
          },
          {
            name: 'Milanesa de pollo empanizada',
            description: 'Milanesa de pollo empanizada',
            image: 'assets/images/default-image.jpg'
          },
        ]
      },
      sides: {
        title: 'Guarniciones',
        description: 'Elige 2 para acompañar tu platillo',
        elements: [
          {
            name: 'Arroz',
            description: 'Delicioso arroz',
            image: 'assets/images/default-image.jpg'
          },
          {
            name: 'Frijoles Refritos',
            description: 'Frijoles refritos caseros, con queso desvoronado',
            image: 'assets/images/default-image.jpg'
          },
          {
            name: 'Espagueti Rojo',
            description: 'Espagueti rojo con crema',
            image: 'assets/images/default-image.jpg'
          },
          {
            name: 'Verduras al vapor',
            description: 'Verduras cocidas al vapor. Zanahoria, coliflor y brócoli.',
            image: 'assets/images/default-image.jpg'
          },
          {
            name: 'Ensalada de coditos con jamón',
            description: 'Ensalada de coditos con jamón de pavo',
            image: 'assets/images/default-image.jpg'
          },
        ]
      },
      desserts: {
        title: 'Postres',
        description: '',
        elements: [
          {
            name: 'Gelatina de Mosaico',
            description: 'Rica, Gelatina de Mosaico con Durazno',
            image: 'assets/images/default-image.jpg'
          }
        ]
      },
      beverages: {
        title: 'Bebidas',
        description: '',
        elements: [
          {
            name: 'Jamaica',
            description: 'Sabrosa Jamaica narural',
            image: 'assets/images/default-image.jpg'
          },
          {
            name: 'Horchata',
            description: 'Sabrosa horchata con leche y canela',
            image: 'assets/images/default-image.jpg'
          },
          {
            name: 'Tamarindo',
            description: 'Agua fresca de tamarindo',
            image: 'assets/images/default-image.jpg'
          },
          {
            name: 'Coca cola',
            description: 'Coca cola de 600 ml',
            image: 'assets/images/default-image.jpg'
          }
        ]
      }
    }
}
