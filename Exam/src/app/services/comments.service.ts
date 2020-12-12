import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  readonly APIUrl = 'http://localhost:57488/api/comments';

  constructor(private  http: HttpClient) { }

  getCommentsList(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl );
  }
  addComments(val: any){
    return this.http.post(this.APIUrl , val);
  }
  updateComments(val: any){
    return this.http.put(this.APIUrl , val);
  }

}
