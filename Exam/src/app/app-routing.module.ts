import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {DeletedComponent} from './deleted/deleted.component';
import {ArticleListComponent} from './article-list/article-list.component';
import {ArticleDetailComponent} from './article-detail/article-detail.component';
import {AuthorsComponent} from './authors/authors.component';

const routes: Routes = [
  {path: '', component: HomeComponent,
  children: [
    {
      path: 'articles',
      component: ArticleListComponent
    },
    {
      path: 'authors',
      component: AuthorsComponent
    }
  ]},
  {path: 'articleDetail/:id', component: ArticleDetailComponent },
  {path: 'about', component: AboutComponent },
  {path: '**', component: DeletedComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routerComponents = [
  HomeComponent,
  AboutComponent,
  DeletedComponent,
  ArticleDetailComponent,
  ArticleListComponent,
  AuthorsComponent
];
