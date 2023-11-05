import { Component, Input } from '@angular/core';
import { SolicitacaoModal } from '../interfaces/solicitacao-modal';

@Component({
  selector: 'app-solicitacao-modal',
  templateUrl: './solicitacao-modal.component.html',
  styleUrls: ['../../../../styles-admin.css']
})
export class SolicitacaoModalComponent {
  @Input() solicitacao?: SolicitacaoModal
}
