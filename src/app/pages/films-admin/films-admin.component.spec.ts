import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsAdminComponent } from './films-admin.component';

describe('MoviesComponent', () => {
  let component: FilmsAdminComponent;
  let fixture: ComponentFixture<FilmsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
