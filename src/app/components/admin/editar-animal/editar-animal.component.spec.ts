import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAnimalComponent } from './editar-animal.component';

describe('EditarAnimalComponent', () => {
  let component: EditarAnimalComponent;
  let fixture: ComponentFixture<EditarAnimalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarAnimalComponent]
    });
    fixture = TestBed.createComponent(EditarAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
