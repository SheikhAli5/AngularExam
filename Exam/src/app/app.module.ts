import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routerComponents} from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule } from '@angular/material/button';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import {MatCardModule} from '@angular/material/card';
import {AuthorsService} from './services/authors.service';
import {CommentsService} from './services/comments.service';
import {ArticleService} from './services/article.service';
import { AddEditAuthorsComponent } from './authors/add-edit-authors/add-edit-authors.component';
import { ShowAuthorsComponent } from './authors/show-authors/show-authors.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthorsComponent} from './authors/authors.component';
import {HttpClientModule} from '@angular/common/http';
import { AddEditArticleComponent } from './article-detail/add-edit-article/add-edit-article.component';
import { ShowArticleComponent } from './article-detail/show-article/show-article.component';
import { DirDirective } from './dir.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routerComponents,
    AuthorsComponent,
    ArticleDetailComponent,
    AddEditAuthorsComponent,
    ShowAuthorsComponent,
    AddEditArticleComponent,
    ShowArticleComponent,
    DirDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ArticleService, AuthorsService, CommentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
