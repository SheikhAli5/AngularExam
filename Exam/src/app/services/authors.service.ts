import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  readonly APIUrl = 'http://localhost:57488/api/Authors';

  constructor(private  http: HttpClient) { }

  getAuthorsList(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl );
  }
  addAuthors(val: any){
    return this.http.post(this.APIUrl , val);
  }
  updateAuthors(val: any){
    return this.http.put(this.APIUrl , val);
  }
  deleteAuthors(val: any){
    return this.http.delete(this.APIUrl + '/' + val);
  }
}
