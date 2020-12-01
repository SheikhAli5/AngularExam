import { Injectable } from '@angular/core';
import {Article} from '../shared/article';
import {Articles} from '../shared/articles';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articles: Article[] = Articles;

  constructor() { }
  getArticles(): Article[] {
    return this.articles;
  }
  getArticlesById(id: number): Article {
    return this.articles.find(x => x.id === id);
  }
}
