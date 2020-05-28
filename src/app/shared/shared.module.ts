import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SafePipe} from '../pipes/safe.pipe';
import {CommentsListComponent} from './comments-list/comments-list.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [SafePipe, CommentsListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [SafePipe, CommentsListComponent]
})
export class SharedModule { }
