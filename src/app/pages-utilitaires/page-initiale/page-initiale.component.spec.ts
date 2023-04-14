import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInitialeComponent } from './page-initiale.component';

describe('PageInitialeComponent', () => {
  let component: PageInitialeComponent;
  let fixture: ComponentFixture<PageInitialeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageInitialeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageInitialeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
