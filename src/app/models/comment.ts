import {IComment} from './../interfaces/icomment';
import * as _ from 'lodash';

export class Comment implements IComment {

  constructor(data) {
    _.set(this, 'data', data);
  }

  get user() {
    return _.get(this, 'data.user');
  }

  get date() {
    return _.get(this, 'data.date');
  }

  get text() {
    return _.get(this, 'data.text');
  }

  get post() {
    return _.get(this, 'data.post');
  }


  /*Set*/

  set user(value) {
    _.set(this, 'data.user', value);
  }

  set date(value) {
    _.set(this, 'data.date', value);
  }

  set text(value) {
    _.set(this, 'data.text', value);
  }

  set post(value) {
    _.set(this, 'data.post', value);
  }

  getData() {
    return _.get(this, 'data');
  }

}
