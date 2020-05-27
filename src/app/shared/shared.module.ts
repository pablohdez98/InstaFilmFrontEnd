import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SafePipe} from '../pipes/safe.pipe';
import {CommentsListComponent} from '../comments-list/comments-list.component';



@NgModule({
  declarations: [SafePipe, CommentsListComponent],
  imports: [
    CommonModule
  ],
  exports: [SafePipe, CommentsListComponent]
})
export class SharedModule { }
