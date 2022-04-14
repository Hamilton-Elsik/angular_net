import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditCommentComponent } from './components/add-edit-comment/add-edit-comment.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { ViewCommentComponent } from './components/view-comment/view-comment.component';

const routes: Routes = [
  { path: '', component: CommentListComponent },
  { path: 'add', component: AddEditCommentComponent },
  { path: 'edit/:id', component: AddEditCommentComponent },
  { path: 'view/:id', component: ViewCommentComponent },
  {path: '**', redirectTo: '',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
