import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthorsService} from '../../services/authors.service';

@Component({
  selector: 'app-add-edit-authors',
  templateUrl: './add-edit-authors.component.html',
  styleUrls: ['./add-edit-authors.component.css']
})
export class AddEditAuthorsComponent implements OnInit {

  constructor(private service: AuthorsService) { }
  form: FormGroup;
  @Input() authors: any;
  AuthorId: string;
  AuthorName: string;
  About: string;


  ngOnInit(): void {
    this.form = new FormGroup({

      AuthorName: new FormControl('', Validators.required),
      About: new FormControl('', Validators.required)
    });

    this.AuthorId = this.authors.AuthorId;
    this.AuthorName = this.authors.AuthorName;
    this.About = this.authors.About;
  }
  addAuthors(){
      const val = {
        AuthorId: this.AuthorId,
        AuthorName: this.form.value.AuthorName,
        About: this.form.value.About
      };
      this.service.addAuthors(val).subscribe(res => {
        alert(res.toString());
      });
  }
  updateAuthors(){
    const val = {
      AuthorId: this.AuthorId,
      AuthorName: this.form.value.AuthorName,
      About: this.form.value.About
    };
    this.service.updateAuthors(val).subscribe(res => {
      alert(res.toString());
    });
  }

}
