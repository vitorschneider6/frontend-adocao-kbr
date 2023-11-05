import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabecalhoAdminComponent } from './cabecalho-admin.component';

describe('CabecalhoAdminComponent', () => {
  let component: CabecalhoAdminComponent;
  let fixture: ComponentFixture<CabecalhoAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CabecalhoAdminComponent]
    });
    fixture = TestBed.createComponent(CabecalhoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
