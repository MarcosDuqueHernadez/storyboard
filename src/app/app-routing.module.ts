import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { CreditosComponent } from './creditos/creditos.component';
import { GaleriaComponent } from './galeria/galeria.component';

const routes: Routes = [
  { path: 'inicio', component: MainComponent },
  { path: 'acercade', component: AcercaDeComponent },
  { path: 'creditos', component: CreditosComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
