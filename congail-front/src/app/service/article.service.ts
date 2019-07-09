import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../models/article';
import { Observable } from 'rxjs';
import {API_URL, API_ARTICLE_LATEST, API_ARTICLE_POST, API_ARTICLE_DELETE, API_ARTICLE_EDIT,} from '../config';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private http: HttpClient;
  constructor(http: HttpClient ) {
    this.http=http;
  }

  getLatest(limit: number): Observable<Article[]>{
    let formData=new FormData();
     formData.append('limit', limit.toString());
     return this.http.post<Article[]>(API_URL + API_ARTICLE_LATEST, formData, {
       withCredentials: true});
  }

  postArticle(data: any): Observable<any>{
    let formData = new FormData();
    formData.append('title', data.title);
    formData.append('text', data.text);
    return this.http.post(API_URL + API_ARTICLE_POST, formData, {withCredentials: true})
  }

  deleteArticle(id: number): Observable<any>{
    let formData = new FormData();
    formData.append('id', id.toString());
    return this.http.post(API_URL + API_ARTICLE_DELETE, formData, {withCredentials:true})
  }

  editArticle(data: any): Observable<any>{
    let formData = new FormData();
    formData.append('title', data.title);
    formData.append('text', data.text);
    formData.append('id', data.id);
    return this.http.post(API_URL + API_ARTICLE_EDIT, formData, {withCredentials: true});
  }
}
