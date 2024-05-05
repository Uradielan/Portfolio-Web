import { Component } from '@angular/core';

@Component({
  selector: 'app-tecnologies',
  templateUrl: './tecnologies.component.html',
  styleUrls: ['./tecnologies.component.css']
})
export class TecnologiesComponent {

  categoriaSeleccionada: string = 'languages';
  showOthers() {
    this.categoriaSeleccionada = 'others';
  }
  showFrameworks() {
    this.categoriaSeleccionada = 'frameworks';
  }
  showLanguages() {
    this.categoriaSeleccionada = 'languages';
  }

}
