import { Component, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ImageService } from '../service/image.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-postimage',
  templateUrl: './postimage.component.html',
  styleUrls: ['./postimage.component.css']
})
export class PostimageComponent implements OnInit {
  model: any = {};
  image: File;
  hasError: boolean;
  errorMessage: string;
  loading: boolean;
  @Output('uploaded') uploaded: EventEmitter<any> = new EventEmitter<any>();
  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.hasError=false;
  }

  selected(data: any){
    document.getElementById("triggerModal").click();
    this.image = <File>data.target.files[0];
  }
  reset(form: FormGroup){
    form.reset();
    this.model={};
    this.hasError=false;
  }

  upload(){
    this.loading=true;
    let formData= new FormData();
    formData.append('fileToUpload', this.image, this.image.name);
    formData.append('title', this.model.title);
    formData.append('description', this.model.text);
    this.imageService.uploadImage(formData).subscribe(data=>{
      this.loading=false;
      if (data){
        if (data['error'])
          this.hasError=true;
          this.errorMessage=data['error'];
      }
      else this.uploaded.emit({});
    })
  }
}
