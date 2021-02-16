import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-form-page',
  templateUrl: './post-form-page.component.html',
  styleUrls: ['./post-form-page.component.scss'],
})
export class PostFormPageComponent implements OnInit {
  postForm: FormGroup;

  postToUpdate: Post = null;
  isLoading = true;

  constructor(
    private fb: FormBuilder,
    private postService: PostsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.getUrlParams();
  }

  getUrlParams(): void {
    this.route.paramMap.subscribe((params) => {
      const postId = params.get('postId');

      if (postId) {
        this.postService.getPostById(postId).subscribe((post) => {
          this.postToUpdate = post;
          this.postForm.patchValue({
            title: this.postToUpdate.title,
            summary: this.postToUpdate.summary,
            body: this.postToUpdate.body,
            photo: this.postToUpdate.photo,
            category: this.postToUpdate.category,
          });
          this.isLoading = false;
        });
        return;
      }

      this.isLoading = false;
    });
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

    if (this.postToUpdate) {
      this.updatePost(newPost);
      return;
    }

    this.createNewPost(newPost);
  }

  createNewPost(newPost: Post): void {
    this.postService.createNewPost(newPost).then((response) => {
      console.log('response', JSON.stringify(response, null, 4));
      this.router.navigate(['/posts']);
    });
  }

  updatePost(postData: Post): void {
    this.postService.updatePost(this.postToUpdate.id, postData).then(() => {
      this.router.navigate(['/posts']);
    });
  }

  deletePost(): void {
    if (this.postToUpdate) {
      this.postService.deletePost(this.postToUpdate.id).then(() => {
        this.router.navigate(['/posts']);
      });
    }
  }
}
