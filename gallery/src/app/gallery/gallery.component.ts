import { Component, OnInit, Input } from '@angular/core';
import { ImageService } from '../service/image.service';
import { User } from '../models/user';
import { Image } from '../models/image';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  imageService: ImageService;
  @Input() hasUser: boolean;
  @Input() user: User;
  hasError: boolean;
  hasImages: boolean;
  loading: boolean;
  errorMessage: string;
  public images: Image[];
  constructor(imageService: ImageService) { 
    this.imageService=imageService;
    this.hasError=false;
    this.hasImages=false;
    this.loading=false;
  }

  ngOnInit() {
    this.getFullGallery();
  }

  getFullGallery(){
    this.loading=true;
    this.imageService.getFullGallery().subscribe(data=>{
      if (data['error']){
        this.loading=false;
        this.hasError=true;
        this.errorMessage=data['error'];
      }
      else if (data['hasImages']){
        this.loading=false;
        this.hasImages=true;
        this.images=data['Images'];
      }
    })
  }

  delete(image: Image){
    this.imageService.deleteImage(image.id).subscribe(data=>{
      this.getFullGallery();
    });
  }

  edit(image: Image){
    let formData = new FormData();
    formData.append('title', image.title);
    formData.append('description', image.text);
    formData.append('id', image.id.toString());
    this.imageService.editImage(formData).subscribe(data=>{
      this.getFullGallery()
    })
  }
}
