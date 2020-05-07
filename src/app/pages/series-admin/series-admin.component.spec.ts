import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesAdminComponent } from './series-admin.component';

describe('SeriesComponent', () => {
  let component: SeriesAdminComponent;
  let fixture: ComponentFixture<SeriesAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
