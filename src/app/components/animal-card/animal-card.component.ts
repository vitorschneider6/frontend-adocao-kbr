import { Component, Input } from '@angular/core';
import { AnimalListagem } from '../interfaces/animal-listagem';

@Component({
  selector: 'app-animal-card',
  templateUrl: './animal-card.component.html',
  styleUrls: ['../../../styles-user.css']
})
export class AnimalCardComponent {

  @Input() public animal: AnimalListagem = {
    codigo: 0,
    nome: "",
    local: "",
    sexo: "",
    imagem: ""
  }

}
