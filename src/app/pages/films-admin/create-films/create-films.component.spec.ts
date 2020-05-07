import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFilmsComponent } from './create-films.component';

describe('CreateSeriesComponent', () => {
  let component: CreateFilmsComponent;
  let fixture: ComponentFixture<CreateFilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFilmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
