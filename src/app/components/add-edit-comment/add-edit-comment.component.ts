import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comment } from 'src/app/interfaces/comment';

@Component({
  selector: 'app-add-edit-comment',
  templateUrl: './add-edit-comment.component.html',
  styleUrls: ['./add-edit-comment.component.css']
})
export class AddEditCommentComponent implements OnInit {
  addComment: FormGroup;


  constructor(private fb: FormBuilder) {
    this.addComment = this.fb.group({
      title: ['', Validators.required],
      creator: ['', Validators.required],
      text: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  add() {
    console.log(this.addComment);

    const comment: Comment = {
      title: this.addComment.get('title')?.value,
      creator: this.addComment.get('creator')?.value,
      text: this.addComment.get('text')?.value,
      creationDate: new Date()
    }
    console.log(comment);
  }

}
