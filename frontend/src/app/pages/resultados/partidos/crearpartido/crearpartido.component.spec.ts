import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearpartidoComponent } from './crearpartido.component';

describe('CrearpartidoComponent', () => {
  let component: CrearpartidoComponent;
  let fixture: ComponentFixture<CrearpartidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearpartidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearpartidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
