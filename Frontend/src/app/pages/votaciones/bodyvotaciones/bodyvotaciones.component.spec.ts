import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyvotacionesComponent } from './bodyvotaciones.component';

describe('BodyvotacionesComponent', () => {
  let component: BodyvotacionesComponent;
  let fixture: ComponentFixture<BodyvotacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyvotacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyvotacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
