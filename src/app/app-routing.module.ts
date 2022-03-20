import { LoginPageComponent } from './components/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './components/register-page/register-page.component'
import { PostsComponent } from './components/posts/posts.component';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo, } from '@angular/fire/auth-guard';
import { PostComponent } from './components/post/post.component';
import { ProfileComponent } from './components/profile/profile.component';




const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['posts']);
const routes: Routes = [
  {
    path: 'login', component: LoginPageComponent,
    ...canActivate(redirectLoggedInToHome),
  },
  {
    path: 'register', component: RegisterPageComponent,
    ...canActivate(redirectLoggedInToHome)
  },
  {
    path: 'posts', component: PostsComponent,
    ...canActivate(redirectUnauthorizedToLogin)
  }, {
    path: 'post', component: PostComponent,
    ...canActivate(redirectUnauthorizedToLogin)
  }, {
    path: 'posts/post', component: PostComponent
  }, {
    path: 'profile', component: ProfileComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
export const componeT = [RegisterPageComponent, LoginPageComponent] 
