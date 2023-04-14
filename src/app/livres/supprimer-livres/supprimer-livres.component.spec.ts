import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerLivresComponent } from './supprimer-livres.component';

describe('SupprimerLivresComponent', () => {
  let component: SupprimerLivresComponent;
  let fixture: ComponentFixture<SupprimerLivresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerLivresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupprimerLivresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
