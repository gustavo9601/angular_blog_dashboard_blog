
// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FormsModule } from '@angular/forms';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination/dist/ngx-pagination';

// Services
import { TranslateService } from './services/translate.service';
import { ConfigService } from './services/config.service';

// Pipes
import { TranslatePipe } from './pipes/translate.pipe';

// Components
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { WidgetComponent } from './components/widget/widget.component';
import { CopyRightComponent } from './components/footer/copy-right/copy-right.component';
import { CardPostComponent } from './components/content/card-post/card-post.component';
import { PostComponent } from './components/content/post/post.component';
import { DomSanitizerPipe } from './pipes/dom-sanitizer.pipe';
import { LeaveCommentComponent } from './components/content/leave-comment/leave-comment.component';
import { ListCommentComponent } from './components/content/list-comment/list-comment.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';


export function translateFactory(provider: TranslateService) {
  return () => provider.getData();
}

export function configFactory(provider: ConfigService) {
  return () => provider.getData();
}

const firebaseConfig = {
  apiKey: 'AIzaSyBQNtv38NgXEc7NSPcY0NOax9wqDnYoigk',
  authDomain: 'gm-blog-dashboard.firebaseapp.com',
  databaseURL: 'https://gm-blog-dashboard.firebaseio.com',
  projectId: 'gm-blog-dashboard',
  storageBucket: 'gm-blog-dashboard.appspot.com',
  messagingSenderId: '841610789530',
  appId: '1:841610789530:web:942f8755f994ebc34e9523'
};


@NgModule({
  declarations: [
    AppComponent,
    TranslatePipe,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    WidgetComponent,
    CopyRightComponent,
    CardPostComponent,
    PostComponent,
    DomSanitizerPipe,
    LeaveCommentComponent,
    ListCommentComponent,
    ClickOutsideDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  providers: [
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: translateFactory,
      deps: [TranslateService],
      multi: true
    },
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: configFactory,
      deps: [ConfigService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
