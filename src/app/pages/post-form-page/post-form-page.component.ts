import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post-form-page',
  templateUrl: './post-form-page.component.html',
  styleUrls: ['./post-form-page.component.scss'],
})
export class PostFormPageComponent implements OnInit {
  postForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.postForm = this.fb.group({
      title: '',
      summary: '',
      body: '',
      photo: '',
      category: '',
    });
  }

  onSubmit(): void {
    console.log('Enviando form');
    const title = this.postForm.get('title').value;
    const summary = this.postForm.get('summary').value;
    const body = this.postForm.get('body').value;
    const photo = this.postForm.get('photo').value;
    const category = this.postForm.get('category').value;

    console.log({
      title,
      summary,
      body,
      photo,
      category,
    });
  }
}
