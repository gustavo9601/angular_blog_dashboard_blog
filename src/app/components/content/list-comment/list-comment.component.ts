import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../../models/comment';
import {CommentService} from '../../../services/comment.service';
import {ConfigService} from '../../../services/config.service';


@Component({
  selector: 'app-list-comment',
  templateUrl: './list-comment.component.html',
  styleUrls: ['./list-comment.component.css']
})
export class ListCommentComponent implements OnInit {

  @Input() idPost: string;
  public listComments: Comment[];
  public showComments: boolean;
  public pageNumber:number;

  constructor(private _commentService: CommentService,
              public _configService: ConfigService) {
    this.listComments = [];
    this.showComments = false;
    this.pageNumber = 1;
  }

  ngOnInit() {
    this._commentService.getCommentsById(this.idPost).subscribe(
      (listComments) => {
        if (listComments.length > 0) {
          this.listComments = listComments;
          this.showComments = true;
        }
      }, (error) => {
        console.log('error obtener comentarios', error);
      }
    );
  }

}
