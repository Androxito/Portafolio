import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ApisComponent } from './apis/apis.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard',pathMatch: 'full'},
  {path: 'dashboard',component: DashboardComponent},
  {path: 'proyectos',component: ProyectosComponent},
  {path: 'habilidades',component: HabilidadesComponent},
  {path: 'apis',component: ApisComponent},
  {path: 'contacto',component: ContactoComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
