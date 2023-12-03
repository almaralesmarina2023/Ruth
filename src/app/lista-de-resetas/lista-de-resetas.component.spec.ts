import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeResetasComponent } from './lista-de-resetas.component';

describe('ListaDeResetasComponent', () => {
  let component: ListaDeResetasComponent;
  let fixture: ComponentFixture<ListaDeResetasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaDeResetasComponent]
    });
    fixture = TestBed.createComponent(ListaDeResetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
