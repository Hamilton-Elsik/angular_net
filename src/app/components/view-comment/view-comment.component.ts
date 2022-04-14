import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/interfaces/comment';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-view-comment',
  templateUrl: './view-comment.component.html',
  styleUrls: ['./view-comment.component.css']
})
export class ViewCommentComponent implements OnInit {

  id: number;
  comment: Comment | undefined;

  constructor(private aRoute: ActivatedRoute, private commentService: CommentService) {
    this.id = +this.aRoute.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {

    this.commentService.getComment(this.id).subscribe(data => {
      console.log(data);
      this.comment = data;
    });

  }

}
