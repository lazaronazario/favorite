import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormFilmsComponent } from './form-films/form-films.component';

const routes: Routes = [
  {path: 'filmes', component: FormFilmsComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

