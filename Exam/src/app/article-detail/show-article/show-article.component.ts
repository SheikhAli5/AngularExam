import {Component, Input, OnInit} from '@angular/core';
import {ArticleDetailComponent} from '../article-detail.component';
import {ArticleService} from '../../services/article.service';
import {Article} from '../../shared/article';
import {map} from 'rxjs/operators';
import {CommentsService} from '../../services/comments.service';
import {FormControl, FormGroup, FormsModule} from '@angular/forms';

@Component({
  selector: 'app-show-article',
  templateUrl: './show-article.component.html',
  styleUrls: ['./show-article.component.css']
})
export class ShowArticleComponent implements OnInit {

  constructor(private service: ArticleService, private service2: CommentsService) { }
  @Input() comments: any;
  ArticlesList: any = [];
  ArticlesList2: any = [];
  CommentsList: any = [];
  ModalTitle: string;
  ActivateAddEditArticleComp = false;
  article: any;
  Authors: any = [];
  AuthorNames: string;
  showing: boolean;
  CommentId: string;
  ArticleId: string;
  MainText: string;
  CommentName: string;
  form3: FormGroup;


  ngOnInit(): void {
    this.form3 = new FormGroup({
      commentName: new FormControl(''),
      mainText: new FormControl('')
      }
    );
    this.refreshArticlesList();
    this.refreshAuthors();
    this.loadCommentsList();
  }
  addClick(){
    this.article = {
      ArticleId: 0,
      ArticleName: '',
      MainText: '',
      AuthorId: 0
    };
    this.ModalTitle = 'Add title';
    this.ActivateAddEditArticleComp = true;

  }
  editClick(item){
    console.log(item);
    this.article = item;
    this.ModalTitle = 'Edit article';
    this.ActivateAddEditArticleComp = true;
  }
  deleteClick(item){
    if (confirm('Do you want to delete?')){
      this.service.deleteArticles(item.ArticleId).subscribe(data => {
        alert(data.toString());
        this.refreshArticlesList();
      });
    }
  }
  closeClick(){
    this.ActivateAddEditArticleComp = false;
    this.refreshArticlesList();
  }
  filterAuthor(id){
    for (const k in this.ArticlesList){

      if(this.ArticlesList[k].ArticleId === id){


    // tslint:disable-next-line:triple-equals
    return this.Authors.filter( x => x.AuthorId === this.ArticlesList[k].AuthorId);
    }
    }
  }
  refreshArticlesList(){
    this.service.getArticlesList().subscribe(data => {
      this.ArticlesList = data;

      console.log(this.ArticlesList[0].AuthorId);
      console.log(data);
    });
  }
  refreshAuthors(){
    this.service.getAllAuthors().subscribe(data => {
      this.Authors = data;
      // tslint:disable-next-line:forin
      for (const k in this.Authors){
        console.log(this.Authors[k]);
      }
    })
  }

  showClick(id) {
    this.ArticlesList2.pop();
    this.showing = !this.showing;
    console.log('asdasddas' + id);
    for (const k in this.ArticlesList){

      if(this.ArticlesList[k].ArticleId === id){
        this.ArticlesList2.push(this.ArticlesList[k]);
      }}
  }



  loadCommentsList(){
    this.service2.getCommentsList().subscribe((data: any) => {
      this.CommentsList = data;

      this.CommentId = this.comments.CommentId;
      this.CommentName = this.comments.CommentName;
      this.MainText = this.comments.MainText;
      this.ArticleId = this.comments.ArticleId;

    });
  }
  addComments(){
    const val = {
      CommentId: this.CommentId,
      ArticleId: this.ArticleId,
      MainText: this.form3.value.mainText,
      CommentName: this.form3.value.commentName

    };
    this.service2.addComments(val).subscribe(res => {
      alert(res.toString());
    });
    this.form3.reset();
  }
  updateComments(){
    const val = {
      CommentId: this.CommentId,
      ArticleId: this.ArticleId,
      MainText: this.form3.value.mainText,
      CommentName: this.form3.value.commentName
    };
    this.service2.updateComments(val).subscribe(res => {
      alert(res.toString());
    });
  }

  filterComment(id){
    for (const k in this.ArticlesList){

      if(this.CommentsList[k].ArticleId === id){


        // tslint:disable-next-line:triple-equals
        return this.CommentsList.filter( x => x.CommentId === this.ArticlesList2[k].CommentId);
      }
    }
  }
}
