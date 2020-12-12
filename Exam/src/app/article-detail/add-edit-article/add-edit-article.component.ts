import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ArticleService} from '../../services/article.service';
import {AuthorsService} from '../../services/authors.service';

@Component({
  selector: 'app-add-edit-article',
  templateUrl: './add-edit-article.component.html',
  styleUrls: ['./add-edit-article.component.css']
})
export class AddEditArticleComponent implements OnInit {

  constructor(private service: ArticleService) { }
  form2: FormGroup;
  @Input() articles: any;
  ArticleId: string;
  ArticleName: string;
  MainText: string;
  AuthorId: string;
  // PhotoFileName: string;
  // PhotoFilePath: string;

  AuthorsList: any = [];
  ngOnInit(): void {
    this.loadAuthorsList();
    this.form2 = new FormGroup({
      ArticleName: new FormControl('', Validators.required),
      MainText: new FormControl('', Validators.required),

      AuthorId: new FormControl('', Validators.required)
    });

    this.ArticleId = this.articles.ArticleId;
    this.ArticleName = this.articles.ArticleName;
    this.MainText = this.articles.MainText;
    this.AuthorId = this.articles.AuthorId;
    // this.PhotoFileName = this.articles.PhotoFileName;
    // this.PhotoFilePath = this.service.PhotoUrl + this.PhotoFileName;
  }
  loadAuthorsList(){
    this.service.getArticlesList().subscribe((data: any) => {
      this.AuthorsList = data;

      this.ArticleId = this.articles.ArticleId;
      this.ArticleName = this.articles.ArticleName;
      this.MainText = this.articles.MainText;
      this.AuthorId = this.articles.AuthorId;
      // this.PhotoFileName = this.articles.PhotoFileName;
      // this.PhotoFilePath = this.service.PhotoUrl + this.PhotoFileName;
    });
  }
  addArticles(){
    const val = {
      ArticleId: this.ArticleId,
      ArticleName: this.form2.value.ArticleName,
      MainText: this.form2.value.MainText,
      AuthorId: this.form2.value.AuthorId,
      PhotoFileName: this.form2.value.PhotoFileName
    };
    this.service.addArticles(val).subscribe(res => {
      alert(res.toString());
    });
  }
  updateArticles(){
    const val = {
      ArticleId: this.ArticleId,
      ArticleName: this.form2.value.ArticleName,
      MainText: this.form2.value.MainText,
      AuthorId: this.form2.value.AuthorId,
      // PhotoFileName: this.PhotoFileName
    };
    this.service.updateArticles(val).subscribe(res => {
      alert(res.toString());
    });
  }
  // uploadPhoto(event){
  //   const file = event.target.files[0];
  //   const formData: FormData = new FormData();
  //   formData.append('uploadedFile', file, file.name);
  //
  //   this.service.UploadPhoto(formData).subscribe((data: any) => {
  //     this.PhotoFileName = data.toString();
  //     this.PhotoFilePath = this.service.PhotoUrl + this.PhotoFileName;
  //   })
  // }


}
