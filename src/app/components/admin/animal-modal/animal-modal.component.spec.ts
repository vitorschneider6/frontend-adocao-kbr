import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalModalComponent } from './animal-modal.component';

describe('AnimalModalComponent', () => {
  let component: AnimalModalComponent;
  let fixture: ComponentFixture<AnimalModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimalModalComponent]
    });
    fixture = TestBed.createComponent(AnimalModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
