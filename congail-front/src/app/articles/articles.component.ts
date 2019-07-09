import { Component, OnInit, Input, SimpleChanges,  ViewEncapsulation} from '@angular/core';
import { ArticleService } from '../service/article.service';
import { ARTICLE_LIMIT } from '../config';
import { Article } from '../models/article';
import { User } from '../models/user';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArticlesComponent implements OnInit {
  articleService: ArticleService;
  articles: Article[];
  hasArticles:boolean;
  loading: boolean;
  hasError: boolean;
  errorMessage;
  @Input() user: User;
  @Input() hasUser:boolean;

  constructor(articleService: ArticleService) { 
    this.articleService=articleService;
    this.loading=true;
    this.hasError=false;
    this.hasArticles=false;
  }

  ngOnInit() {
    this.getArticles();
  }
  

  getArticles(){
    this.loading=true;
    this.articleService.getLatest(ARTICLE_LIMIT).subscribe(data=>{
      if(data['error']){
        this.loading=false;
        this.hasError=true;
        this.errorMessage=data['error'];
      }
      else if (data['hasArticles']){
        this.articles=data['articles'];
        this.loading=false;
        this.hasArticles=true;
      }
      
    })
  }

  deleteArticle(article: Article){
    this.articleService.deleteArticle(article.id).subscribe(data => {
      if (data){
        if (data['error'])
         this.hasError=true;
         this.errorMessage=data['error'];
      }
      else this.getArticles();
    })
  }
  editArticle(article: Article){
    this.articleService.editArticle(article).subscribe(data=>{
      if (data){
        if(data['error']){
          console.log(data);
          this.hasError=true;
          this.errorMessage=data['error'];
        }
      }
      this.getArticles();
    });
  }
}
