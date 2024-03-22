import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ApisComponent } from './apis/apis.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApioneComponent } from './apis/apione/apione.component';
import { ApitwoComponent } from './apis/apitwo/apitwo.component';
import { SublevelMenuComponent } from './sidenav/sublevel-menu.component';
import { MenusComponent } from './menus/menus.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    ProyectosComponent,
    HabilidadesComponent,
    ApisComponent,
    ContactoComponent,
    DashboardComponent,
    ApioneComponent,
    ApitwoComponent,
    SublevelMenuComponent,
    MenusComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
