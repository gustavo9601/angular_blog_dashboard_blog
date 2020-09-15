import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private _data: any;

  constructor(private http: HttpClient) {
  }

  public getData() {
    return new Promise((resolve, reject) => {
      this.http.get('assets/config/app-config.json').subscribe(data => {
        this._data = data;
        resolve(true);
      }, error => {
        console.error('Error al obtener la configuración: ' + error);
        reject(true);
      });
    });
  };

  get website() {
    return _.get(this._data, 'website');
  }

  get logo() {
    return _.get(this._data, 'logo');
  }

  get show_principal_post() {
    return _.get(this._data, 'show_principal_post');
  }

  get num_posts_per_page() {
    return _.get(this._data, 'num_posts_per_page');
  }

  get num_comments_per_page() {
    return _.get(this._data, 'num_comments_per_page');
  }

  get social_networks() {
    return _.get(this._data, 'social_networks');
  }

  get link_dashboard() {
    return _.get(this._data, 'link_dashboard');
  }


}
