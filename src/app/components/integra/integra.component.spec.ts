import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegraComponent } from './integra.component';

describe('IntegraComponent', () => {
  let component: IntegraComponent;
  let fixture: ComponentFixture<IntegraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntegraComponent]
    });
    fixture = TestBed.createComponent(IntegraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
