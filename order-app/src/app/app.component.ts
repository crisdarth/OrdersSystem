import { Component } from '@angular/core';
import { Company } from './models/company.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SISTEMA DE PEDIDOS';
  company : Company = {name: "HEROES INC.",
    description: "Compañia dedicada a salvar el mundo.",
    imageUrl: "assets/images/hero.png",
    address: "Calle falsa #123",
    phone: 7777777,
    email: "contacto@heroesinc.com"};
}
