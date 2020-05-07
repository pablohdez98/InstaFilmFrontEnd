import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFilmsComponent } from './update-films.component';

describe('UpdateFilmsComponent', () => {
  let component: UpdateFilmsComponent;
  let fixture: ComponentFixture<UpdateFilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFilmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
