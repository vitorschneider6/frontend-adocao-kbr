import { Component, Input } from '@angular/core';
import { Administrador } from '../interfaces/administrador';

@Component({
  selector: 'app-modal-usuario',
  templateUrl: './modal-usuario.component.html',
  styleUrls: ['../../../../styles-admin.css']
})
export class ModalUsuarioComponent {
  @Input() administrador?: Administrador
}
