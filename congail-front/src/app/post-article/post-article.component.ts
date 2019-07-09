import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ArticleService } from '../service/article.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-article',
  templateUrl: './post-article.component.html',
  styleUrls: ['./post-article.component.css']
})
export class PostArticleComponent implements OnInit {
  model: any = {}
  loading: boolean;
  hasError: boolean;
  errorMessage:string;
  articleService: ArticleService;
  @Output('posted') posted: EventEmitter<any> = new EventEmitter<any>();

  constructor(articleService: ArticleService) { 
      this.loading=false;
      this.hasError=false;
      this.articleService=articleService;
  }

  ngOnInit() {
  }

  post(){
    this.loading=true;
    this.hasError=false;
    this.articleService.postArticle(this.model).subscribe(data=>{
      this.loading=false;
      this.model={};
      this.posted.emit({});
      if (data['error']){
        this.hasError=true;
        this.errorMessage=data['error'];
      }
    });
  }

  reset(postForm: NgForm){
    postForm.reset();
  }

}
