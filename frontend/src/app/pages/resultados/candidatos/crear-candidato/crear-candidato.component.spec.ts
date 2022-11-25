import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCandidatoComponent } from './crear-candidato.component';

describe('CrearCandidatoComponent', () => {
  let component: CrearCandidatoComponent;
  let fixture: ComponentFixture<CrearCandidatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCandidatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
