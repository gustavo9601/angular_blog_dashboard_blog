import {Component, OnInit} from '@angular/core';
import {ConfigService} from '../../services/config.service';
import {CategoryService} from '../../services/category.service';
import {Category} from '../../models/category';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public showSearch: boolean;
  public categories: Category[];

  constructor(public _configServcice: ConfigService,
              private _categoryService: CategoryService) {
    this.showSearch = false;

  }

  ngOnInit() {
    this._categoryService.getCategories().subscribe(
      (listCategories) => {
        this.categories = listCategories;
      }
    );
    this.categories = [];
  }


  openInputSearch() {
    this.showSearch = !this.showSearch;
  }

  searchPost(value) {
    console.log('value inputSearch', value);

  }

  showPosts(category) {
    console.log('category clicked', category);
  }
}
