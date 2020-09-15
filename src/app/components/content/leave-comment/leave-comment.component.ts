import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../../models/comment';
import {CommentService} from '../../../services/comment.service';
import * as moment from 'moment';

@Component({
  selector: 'app-leave-comment',
  templateUrl: './leave-comment.component.html',
  styleUrls: ['./leave-comment.component.css']
})
export class LeaveCommentComponent implements OnInit {

  @Input() idPost: string;
  public comment: Comment;

  constructor(
    private _commentService: CommentService
  ) {
    this.comment = new Comment({});
  }

  ngOnInit() {
  }

  saveComment() {
    this.comment.date = moment().toISOString();
    this.comment.post = this.idPost;

    this._commentService.addComment(this.comment);
    this.comment = new Comment({});
  }
}
