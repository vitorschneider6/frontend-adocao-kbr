import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSolicitacoesComponent } from './listar-solicitacoes.component';

describe('ListarSolicitacoesComponent', () => {
  let component: ListarSolicitacoesComponent;
  let fixture: ComponentFixture<ListarSolicitacoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarSolicitacoesComponent]
    });
    fixture = TestBed.createComponent(ListarSolicitacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
