import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacaoModalComponent } from './solicitacao-modal.component';

describe('SolicitacaoModalComponent', () => {
  let component: SolicitacaoModalComponent;
  let fixture: ComponentFixture<SolicitacaoModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolicitacaoModalComponent]
    });
    fixture = TestBed.createComponent(SolicitacaoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
