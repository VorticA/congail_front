import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Article } from '../models/article';
import { User } from '../models/user';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() hasUser: boolean;
  @Input() user: User;
  @Input() article: Article;
  editModel:Article;
  @Output('deleteArticle') deleteArticle: EventEmitter<Article> = new EventEmitter<Article>();
  @Output('editArticle') editArticle: EventEmitter<Article> = new EventEmitter<Article>();
  editMode: boolean;
  constructor() { 
    this.editMode=false;
  }
  
  ngOnInit() {
  }
  
  delete(){
    this.deleteArticle.emit(this.article);
  }


  turnOnEditMode(){
    this.editMode=true;
    this.editModel=this.article;
  }
  edit(){
    this.editMode=false;
    this.editArticle.emit(this.editModel);
  }
}
