import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../../../services/config.service';

@Component({
  selector: 'app-copy-right',
  templateUrl: './copy-right.component.html',
  styleUrls: ['./copy-right.component.css']
})
export class CopyRightComponent implements OnInit {

  public year:number;
  constructor(public _configService:ConfigService) { }

  ngOnInit() {
    this.year = new Date().getFullYear();
  }

}
