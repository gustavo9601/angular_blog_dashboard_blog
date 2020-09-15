import {Component, OnInit} from '@angular/core';
import {Post} from '../../../models/post';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  public post: Post;
  public showPost: boolean;

  constructor(private routeActivatedRoute: ActivatedRoute,
              private _postService: PostService) {
    this.showPost = false;
  }

  ngOnInit() {
    const self = this;
    this.routeActivatedRoute.params.subscribe(
      (params) => {
        const id = params['id'];
        this._postService.getPostById(id).subscribe(
          (post) => {
            if (post) {
              self.post = new Post(post);
              self.showPost = true;
              console.log('post por id', post);
            }
          }
        );
      }
    );
  }

}
