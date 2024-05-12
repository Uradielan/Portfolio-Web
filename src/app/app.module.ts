import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { TecnologiesComponent } from './body/tecnologies/tecnologies.component';
import { ProjectsComponent } from './body/projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './body/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    TecnologiesComponent,
    ProjectsComponent,
    FooterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
