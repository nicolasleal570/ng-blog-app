import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';
import { SelectedPostComponent } from './pages/selected-post/selected-post.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'posts', component: PostsPageComponent },
  { path: 'posts/create', pathMatch: 'full', component: PostsPageComponent },
  { path: 'posts/:postId', component: SelectedPostComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
