import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaNuevaComponent } from './venta-nueva.component';

describe('VentaNuevaComponent', () => {
  let component: VentaNuevaComponent;
  let fixture: ComponentFixture<VentaNuevaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentaNuevaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentaNuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
