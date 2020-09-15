import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContentComponent} from './components/content/content.component';
import {PostComponent} from './components/content/post/post.component';

const routes: Routes = [
  {path: 'content', component: ContentComponent},
  {path: 'post/:id', component: PostComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'content'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
