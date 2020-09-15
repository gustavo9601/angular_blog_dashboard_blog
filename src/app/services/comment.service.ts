import {Comment} from '../models/comment';
import {Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    private afd: AngularFireDatabase
  ) {
  }

  getLastComments(): Observable<Comment[]> {
    return this.afd.list<Comment>('/comments', ref =>
      ref.orderByChild('date').limitToFirst(5)
    ).valueChanges();
  }

  getComments(): Observable<Comment[]> {
    return this.afd.list<Comment>('/comments').valueChanges();
  }

  addComment(comment: Comment) {
    console.log('comment.getData()', comment.getData());
    this.afd.list('/comments').push(comment.getData());
  }

  getCommentsById(id: string): Observable<Comment[]> {
    return this.afd.list<Comment>('/comments', ref => ref.orderByChild('post').equalTo(id)).valueChanges();
  }
}
