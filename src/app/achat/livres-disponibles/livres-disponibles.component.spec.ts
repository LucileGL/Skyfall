import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivresDisponiblesComponent } from './livres-disponibles.component';

describe('LivresDisponiblesComponent', () => {
  let component: LivresDisponiblesComponent;
  let fixture: ComponentFixture<LivresDisponiblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivresDisponiblesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivresDisponiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
