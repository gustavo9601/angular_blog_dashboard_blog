import {Component, OnInit} from '@angular/core';
import {ConfigService} from '../../services/config.service';
import {CategoryService} from '../../services/category.service';
import {Category} from '../../models/category';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public showSearch: boolean;
  public categories: Category[];

  constructor(public _configServcice: ConfigService,
              private _categoryService: CategoryService,
              private router: Router) {
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


  openInputSearch($event) {
    // Detenga el click para que no interfiera con la directiva de ocultar el input al emitir el clickOuside
    $event.stopPropagation();
    this.showSearch = !this.showSearch;
  }

  searchPost(value) {
    console.log('value inputSearch', value);
    this.router.navigate(['search', value]);
  }

  showPosts(category) {
    console.log('category clicked', category);
  }

  hideInputSearch(){
    this.showSearch = false;
  }

}
