import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarAnimalComponent } from './cadastrar-animal.component';

describe('CadastrarAnimalComponent', () => {
  let component: CadastrarAnimalComponent;
  let fixture: ComponentFixture<CadastrarAnimalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarAnimalComponent]
    });
    fixture = TestBed.createComponent(CadastrarAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
