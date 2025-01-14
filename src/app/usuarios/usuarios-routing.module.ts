import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';


const routes: Routes = [
  {
    path: 'lista',
    component: UsuariosComponent
  },
  {
    path: '**',
    redirectTo: 'uti/usuarios/lista'
  }
]

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class UsuariosRoutingModule { }
