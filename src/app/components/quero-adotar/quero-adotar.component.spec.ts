import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueroAdotarComponent } from './quero-adotar.component';

describe('QueroAdotarComponent', () => {
  let component: QueroAdotarComponent;
  let fixture: ComponentFixture<QueroAdotarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QueroAdotarComponent]
    });
    fixture = TestBed.createComponent(QueroAdotarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
