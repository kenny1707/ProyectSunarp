import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styles: ``
})
export class SidebarComponent {
  constructor(private router: Router) { }

  cambiarRuta(event: Event): void {
    // Obtener el valor seleccionado del combo box
    const selectElement = event.target as HTMLSelectElement;
    const ruta = selectElement.value;

    // Si la ruta no está vacía, navegar a la nueva ruta
    if (ruta) {
      this.router.navigate([ruta]);  // Cambia la ruta dentro de la aplicación Angular
    }
  }

  abrirRuta(event: Event): void {
    // Obtener el valor seleccionado del combo box
    const selectElement = event.target as HTMLSelectElement;
    const ruta = selectElement.value;

    // Si la ruta no está vacía, abrirla en una nueva pestaña
    if (ruta) {
      window.open(ruta, '_blank');  // Abre la URL en una nueva pestaña
    }
  }
}
