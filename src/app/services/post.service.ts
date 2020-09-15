import {IPost} from './../interfaces/ipost';
import {Observable} from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/database';
import {Injectable} from '@angular/core';
import {Post} from '../models/post';

import * as moment from 'moment';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private afd: AngularFireDatabase
  ) {
  }


  getPosts(): Observable<IPost[]> {
    return this.afd.list<IPost>('posts').valueChanges();
  }

  getPostById(id: string): Observable<Post> {
    return this.afd.object<Post>('posts/' + id).valueChanges();
  }
}
