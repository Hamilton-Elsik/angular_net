import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/interfaces/comment';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  listComments: Comment[]=[
    {title: 'Angular', creator: 'Fernando', creationDate: new  Date(), text: ':V'},
    {title: 'React', creator: 'Miguel', creationDate: new  Date(), text: ':libreria para crear spa'},
  
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
