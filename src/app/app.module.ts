import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

//componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddEditCommentComponent } from './components/add-edit-comment/add-edit-comment.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { ViewCommentComponent } from './components/view-comment/view-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddEditCommentComponent,
    CommentListComponent,
    ViewCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
