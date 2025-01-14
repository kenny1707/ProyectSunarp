import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'uti/accesos',
    loadChildren: () => import('./accesos/accesos.module').then( m => m.AccesosModule)
  },
  {
    path: 'uti/usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then( m => m.UsuariosModule)
  },
  {
    path: '**',
    redirectTo: 'uti/usuarios/lista'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes ),
  ],
  exports: [
    RouterModule,
  ]
})


export class AppRoutingModule { }
