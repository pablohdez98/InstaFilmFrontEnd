import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import {UsersRoutingModule} from "./users-routing.module";
import {UsersListComponent} from "./users-list/users-list.component";
import {DeleteUserComponent} from "./delete-user/delete-user.component";
import {UpdateUserComponent} from "./update-user/update-user.component";
import {CreateUserComponent} from "./create-user/create-user.component";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {DataTablesModule} from "angular-datatables";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {RouterTestingModule} from "@angular/router/testing";

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  const routes: Routes = [
    {
      path: '', component: UsersComponent,
      children: [
        { path: 'list', component: UsersListComponent },
        { path: 'new', component: CreateUserComponent },
        { path: 'update/:id', component: UpdateUserComponent },
      ]
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsersComponent, UsersListComponent, DeleteUserComponent, UpdateUserComponent, CreateUserComponent],
      imports: [
        CommonModule,
        UsersRoutingModule,
        ReactiveFormsModule,
        DataTablesModule,
        RouterTestingModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
