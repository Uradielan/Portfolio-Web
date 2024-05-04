import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  desplegarMenu: boolean = false;
  fondo: string = ''

  toggleVariables() {
    this.desplegarMenu = !this.desplegarMenu;
    this.fondo = this.fondo === '' ? 'bg-white' : '';
  }
}
