import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Image } from '../models/image';
import { User } from '../models/user';
import * as $ from 'jquery';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  @Input() image: Image;
  @Input() hasUser: Boolean;
  @Input() user: User;
  @Input() index: number;
  width: number;
  height: number;
  editModel: Image;
  @Output('deleteEvent') deleteEvent: EventEmitter<Image> = new EventEmitter<Image>();
  @Output('editEvent') editEvent: EventEmitter<Image> = new EventEmitter<Image>();
  constructor() { }

  ngOnInit() {
    if (this.index==0){
      document.getElementById('load-script').click();
    }
    this.editModel=this.image;
  }

  delete(){
    this.deleteEvent.emit(this.image);
  }

  edit(){
    this.editEvent.emit(this.editModel);
  }

  startGallery(){
  }
}
