import {Component, OnInit} from '@angular/core';
import {PostService} from '../../services/post.service';
import {IPost} from '../../interfaces/ipost';
import {ConfigService} from '../../services/config.service';
import {ActivatedRoute} from '@angular/router';
import {CategoryService} from '../../services/category.service';

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
              public _configService: ConfigService,
              private routerParams: ActivatedRoute) {
    this.posts = [];
    this.showPosts = false;
    this.pageNumber = 1;
  }

  ngOnInit() {
    this.pageNumber = 1;

    const self = this;
    this.routerParams.params.subscribe(
      (params) => {
        if (params['category']) {
          // Si se envia un parametro de id categoria
          console.log('category id', params['category']);

          const idCategory = params['category'];
          this._postService.getPostsByCategory(idCategory).subscribe(
            (postsByCategory) => {
              self.posts = postsByCategory;
              self.showPosts = true;
            }
          );
          // Verificacion si viene es una busqueda
        } else if (params['valueSearch']) {
          console.log('params[\'valueSearch\']', params['valueSearch']);


          const valueSearch = params['valueSearch'];
          this._postService.getPostsByName(valueSearch).subscribe(
            (postsByCategory) => {
              self.posts = postsByCategory;
              self.showPosts = true;
            }
          );

        } else {
          // Muestra posts normales del inicio
          self._postService.getPosts().subscribe(
            (listPosts) => {
              self.posts = listPosts;
              self.showPosts = true;
            }, (error) => {
              console.log('Error obtener postss', error);
            }
          );


        }
      }
    );
  }




}
