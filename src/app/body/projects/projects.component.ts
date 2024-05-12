import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  imgDS: boolean = false;
  mostrarDS() {
    this.imgDS = !this.imgDS;
  }

  mostrarProyectos: boolean = false;
  masProyectos() {
    this.mostrarProyectos = !this.mostrarProyectos;
  }

  imgVisible: number = 0;
  mostrarFercol() {
    this.imgVisible = (this.imgVisible + 1) % 3;
  }

  mostrarMas: boolean = false;
  mostrarLaska() {
    this.mostrarMas = !this.mostrarMas;
  }

}
