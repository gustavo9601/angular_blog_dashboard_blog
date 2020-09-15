import {Component, OnInit} from '@angular/core';
import {PostService} from '../../services/post.service';
import {IPost} from '../../interfaces/ipost';
import {ConfigService} from '../../services/config.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public posts: IPost[];
  public showPosts: boolean;
  public pageNumber: number;

  constructor(private _postService: PostService,
              public _configService: ConfigService) {
    this.posts = [];
    this.showPosts = false;
    this.pageNumber = 1;
  }

  ngOnInit() {
    this._postService.getPosts().subscribe(
      (listPosts) => {
        this.posts = listPosts;
        this.showPosts = true;
      }, (error) => {
        console.log('Error obtener postss', error);
      }
    );
  }

}
