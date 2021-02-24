import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './guards/authentication.guard';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PostFormPageComponent } from './pages/post-form-page/post-form-page.component';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';
import { SelectedPostComponent } from './pages/selected-post/selected-post.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'posts', component: PostsPageComponent },
  {
    path: 'posts/create',
    pathMatch: 'full',
    component: PostFormPageComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'posts/:postId/update',
    pathMatch: 'full',
    component: PostFormPageComponent,
    canActivate: [AuthenticationGuard],
  },
  { path: 'posts/:postId', component: SelectedPostComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'sign-up', component: SignUpPageComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
