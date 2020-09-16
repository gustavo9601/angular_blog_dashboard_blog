import {IPost} from './../interfaces/ipost';
import {Observable} from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/database';
import {Injectable} from '@angular/core';
import {Post} from '../models/post';

import * as moment from 'moment';
import * as _ from 'lodash';
import {map} from 'rxjs/operators';

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

  getPostsByCategory(idCategory: string): Observable<IPost[]> {
    return this.getPosts().pipe(
      map(
        (posts: IPost[]) => {
          const postFiltered = [];
          _.forEach(posts, post => {
            const categoryFound = _.find(post.categories, categoryPost => categoryPost === idCategory);
            // De existir en la coleecion
            if (categoryFound) {
              // Pushea el arreglo, como un objeto de clase
              postFiltered.push(new Post(post));
            }
          });
          return postFiltered;
        }
      )
    );
  }

  getPostsByName(name: string): Observable<IPost[]> {
    return this.getPosts().pipe(
      map(
        (posts: IPost[]) => {
          const postFiltered = [];
          _.forEach(posts, post => {
            // Verificando si incluye el string dentro de la iteracion
            if (post.title.toLowerCase().includes(name)) {
              postFiltered.push(post);
            }

          });
          return postFiltered;
        }
      )
    );
  }

}
