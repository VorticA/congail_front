import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Image } from '../models/image';
import { Observable } from 'rxjs';
import { API_IMAGE_GALLERY, API_URL, API_IMAGE_POST, API_IMAGE_DELETE, API_IMAGE_EDIT } from '../config';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  http: HttpClient;
  constructor(http: HttpClient) { 
    this.http=http;
  }

  getFullGallery(): Observable<Image[]>{
    return this.http.get<Image[]>(API_URL + API_IMAGE_GALLERY, {withCredentials: true});
  }

  uploadImage(formdata: FormData): Observable<any>{
    return this.http.post(API_URL + API_IMAGE_POST, formdata, {withCredentials:true});
  }
  deleteImage(id: number): Observable<any>{
    let formData= new FormData();
    formData.append('id', id.toString()); 
    return this.http.post(API_URL + API_IMAGE_DELETE, formData, {withCredentials: true});
  }
  editImage(formdata: FormData): Observable<any>{
    return this.http.post(API_URL + API_IMAGE_EDIT, formdata, {withCredentials: true});
  }
}
