import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReestablecimientoExitosoPage } from './reestablecimiento-exitoso.page';

describe('ReestablecimientoExitosoPage', () => {
  let component: ReestablecimientoExitosoPage;
  let fixture: ComponentFixture<ReestablecimientoExitosoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReestablecimientoExitosoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
