import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarpartidoComponent } from './listarpartido.component';

describe('ListarpartidoComponent', () => {
  let component: ListarpartidoComponent;
  let fixture: ComponentFixture<ListarpartidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarpartidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarpartidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
