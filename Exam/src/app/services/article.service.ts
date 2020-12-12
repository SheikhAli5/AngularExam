import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Article} from '../shared/article';
import {Observable} from 'rxjs';
import {Articles} from '../shared/articles';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  readonly APIUrl = 'http://localhost:57488/api/articles';
  readonly PhotoUrl = 'http://localhost:57488/Photos/';
  private articles: Article[] = Articles;

  constructor(private  http: HttpClient) { }
  getArticles(): Article[] {
    return this.articles;
  }
  getArticlesById(id: number): Article {
    return this.articles.find(x => x.id === id);
  }
  getArticlesList(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl );
  }
  addArticles(val: any){
    return this.http.post(this.APIUrl , val);
  }
  updateArticles(val: any){
    return this.http.put(this.APIUrl , val);
  }
  deleteArticles(val: any){
    return this.http.delete(this.APIUrl + '/' + val);
  }
  getAllAuthors(): Observable<any>{
    return this.http.get<any[]>(this.APIUrl + '/AllAuthors');
  }
  UploadPhoto(val: any){
    return this.http.post(this.APIUrl + '/SaveFile', val);
  }
}
