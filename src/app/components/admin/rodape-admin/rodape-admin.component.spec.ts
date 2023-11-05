import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodapeAdminComponent } from './rodape-admin.component';

describe('RodapeAdminComponent', () => {
  let component: RodapeAdminComponent;
  let fixture: ComponentFixture<RodapeAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RodapeAdminComponent]
    });
    fixture = TestBed.createComponent(RodapeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
