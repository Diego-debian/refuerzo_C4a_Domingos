import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCandidatoComponent } from './listar-candidato.component';

describe('ListarCandidatoComponent', () => {
  let component: ListarCandidatoComponent;
  let fixture: ComponentFixture<ListarCandidatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCandidatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
