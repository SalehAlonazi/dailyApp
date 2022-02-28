import { LoginPageComponent } from './components/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './components/register-page/register-page.component'
import { PostsComponent } from './components/posts/posts.component';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo, } from '@angular/fire/auth-guard';




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
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
export const componeT = [RegisterPageComponent, LoginPageComponent] 
