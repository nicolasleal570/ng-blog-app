import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-form-page',
  templateUrl: './post-form-page.component.html',
  styleUrls: ['./post-form-page.component.scss'],
})
export class PostFormPageComponent implements OnInit {
  postForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private postService: PostsService,
    private router: Router
  ) {}

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
    const newPost: Post = {
      title: this.postForm.get('title').value,
      summary: this.postForm.get('summary').value,
      body: this.postForm.get('body').value,
      photo: this.postForm.get('photo').value,
      category: this.postForm.get('category').value,
    };

    this.postService.createNewPost(newPost).then((response) => {
      console.log('response', JSON.stringify(response, null, 4));
      this.router.navigate(['/posts']);
    });
  }
}
