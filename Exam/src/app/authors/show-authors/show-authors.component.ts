import { Component, OnInit } from '@angular/core';
import {AuthorsService} from '../../services/authors.service';

@Component({
  selector: 'app-show-authors',
  templateUrl: './show-authors.component.html',
  styleUrls: ['./show-authors.component.css']
})
export class ShowAuthorsComponent implements OnInit {

  constructor(private service: AuthorsService) { }
  AuthorsList: any[];
  ModalTitle: string;
  ActivateAddEditAuthorComp = false;
  author: any;

  ngOnInit(): void {
    this.refreshAuthorsList();
  }
  addClick(){
    this.author = {
      AuthorId: 0,
      AuthorName: '',
      About: ''
    };
    this.ModalTitle = 'Add title';
    this.ActivateAddEditAuthorComp = true;

  }
  editClick(item){
    this.author = item;
    this.ModalTitle = 'Edit author';
    this.ActivateAddEditAuthorComp = true;
  }
  deleteClick(item){
    if (confirm('Do you want to delete?')){
      this.service.deleteAuthors(item.AuthorId).subscribe(data => {
        alert(data.toString());
        this.refreshAuthorsList();
      });
    }
  }
  closeClick(){
    this.ActivateAddEditAuthorComp = false;
    this.refreshAuthorsList();
  }
  refreshAuthorsList(){
    this.service.getAuthorsList().subscribe(data => {
      this.AuthorsList = data;
    });
  }
}
