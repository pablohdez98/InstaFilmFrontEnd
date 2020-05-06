import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFilmsAdminComponent } from './create-films-admin.component';

describe('CreateSeriesComponent', () => {
  let component: CreateFilmsAdminComponent;
  let fixture: ComponentFixture<CreateFilmsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFilmsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFilmsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
