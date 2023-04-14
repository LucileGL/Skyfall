import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesUtilitairesComponent } from './pages-utilitaires.component';

describe('PagesUtilitairesComponent', () => {
  let component: PagesUtilitairesComponent;
  let fixture: ComponentFixture<PagesUtilitairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesUtilitairesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesUtilitairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
