import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-selected-post',
  templateUrl: './selected-post.component.html',
  styleUrls: ['./selected-post.component.scss'],
})
export class SelectedPostComponent implements OnInit {
  postId: string = '';
  post: Post = null;
  isLoading: boolean = true;

  constructor(
    private postsService: PostsService,
    private router: ActivatedRoute
  ) {
    this.getParamId();
  }

  ngOnInit(): void {
    this.findPostById();
  }

  getParamId(): void {
    this.router.paramMap.subscribe((params) => {
      this.postId = params.get('postId');
    });
  }

  findPostById(): void {
    if (this.postId) {
      this.postsService.getPostById(this.postId).subscribe((post) => {
        this.post = post;
        this.isLoading = false;
      });
    }
  }
}
