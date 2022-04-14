import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Comment } from 'src/app/interfaces/comment';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-add-edit-comment',
  templateUrl: './add-edit-comment.component.html',
  styleUrls: ['./add-edit-comment.component.css']
})
export class AddEditCommentComponent implements OnInit {
  id = 0;
  addComment: FormGroup;
  action = 'Agregar';
  comment: Comment | undefined;


  constructor(private fb: FormBuilder, private commentService: CommentService, private router: Router, private aRoute: ActivatedRoute) {
    this.id = +this.aRoute.snapshot.paramMap.get('id')!;
    this.addComment = this.fb.group({
      title: ['', Validators.required],
      creator: ['', Validators.required],
      text: ['', Validators.required],
    })
  }

  ngOnInit(): void {

    if (this.id !== 0) {
      this.action = 'Editar';
      this.commentService.getComment(this.id).subscribe(data => {
        this.comment = data;
        console.log(data);
        this.addComment.patchValue({
          title: data.title,
          text: data.text,
          creator: data.creator,

        })
      });

    }
  }

  addEdit() {
    console.log(this.addComment);

    const comment: Comment = {
      title: this.addComment.get('title')?.value,
      creator: this.addComment.get('creator')?.value,
      text: this.addComment.get('text')?.value,
      creationDate: null
    }

    if (this.comment === undefined) {

      comment.creationDate = new Date()

      console.log(comment);

      this.commentService.postComment(comment).subscribe(data => {
        console.log(data);
        this.router.navigate(['/']);
      });
    }
    else {
      comment.id = this.comment.id;
      comment.creationDate = this.comment.creationDate;

      this.commentService.updateComment(this.id, comment).subscribe(data => {
        console.log(data);
        this.router.navigate(['/']);
      });

    }
  }



}
