import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ArticleService} from '../services/article.service';
import {Article} from '../shared/article';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  article: Article;

  constructor(private route: ActivatedRoute,
              private articleService: ArticleService,
              private router: Router) { }

  ngOnInit(): void {
      const id = this.route.snapshot.params.id;
    //this.article = this.articleService.getArticlesById(Number(id));

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.article = this.articleService.getArticlesById(parseInt(params.get('id')));

    });
  }
  goPrevious(){
    let previousId = this.article.id - 1;
    this.router.navigate(['/articleDetail', previousId]);
  }
  goNext(){
    let nextId = this.article.id + 1;
    this.router.navigate(['/articleDetail', nextId]);
  }

}
