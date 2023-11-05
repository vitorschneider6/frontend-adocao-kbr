import { Component, Input } from '@angular/core';
import { AnimalAdmin } from '../interfaces/animal-admin';

@Component({
  selector: 'app-animal-modal',
  templateUrl: './animal-modal.component.html',
  styleUrls: ['../../../../styles-admin.css']
})
export class AnimalModalComponent {
  @Input() animal?: AnimalAdmin
}
