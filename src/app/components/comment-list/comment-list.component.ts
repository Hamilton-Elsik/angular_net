import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/interfaces/comment';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  listComments: Comment[] = [];

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.getComments();
  }

  getComments() {
    this.commentService.getListComments()
      .subscribe({
        next: (data) => {
          console.log(data);
          this.listComments = data;
        },
        error: (error) => {
          console.log(error);
        }
      });
  }

  deleteComment(id: any) {
    console.log(id);
    this.commentService.deleteComment(id).subscribe(data => {
      this.getComments();
    });
  }

}
