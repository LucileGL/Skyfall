import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercherAuteurComponent } from './rechercher-auteur.component';

describe('RechercherAuteurComponent', () => {
  let component: RechercherAuteurComponent;
  let fixture: ComponentFixture<RechercherAuteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercherAuteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercherAuteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
