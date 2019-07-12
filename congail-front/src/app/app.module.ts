import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { LoginComponent } from './login/login.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './article/article.component';
import { PostArticleComponent } from './post-article/post-article.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ArticlesComponent,
    ArticleComponent,
    PostArticleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{provide: UserService, useClass: UserService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
