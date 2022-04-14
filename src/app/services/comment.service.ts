import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../interfaces/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private myAppUrl = 'https://localhost:44319/'
  private myApiUrl = 'api/Comment/'
  constructor(private http: HttpClient) { }

  getListComments(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }

  deleteComment(id: number): Observable<any> {
    return this.http.delete(this.myAppUrl + this.myApiUrl + id);
  }

  updateComment(id: number, comment: Comment): Observable<any> {
    return this.http.put(this.myAppUrl + this.myApiUrl + id, comment);
  }

  postComment(comment: Comment): Observable<any> {
    return this.http.post(this.myAppUrl + this.myApiUrl, comment);
  }

  getComment(id: number): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl + id);
  }
}
