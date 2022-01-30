import { LoginPageComponent } from './components/login-page/login-page.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './components/register-page/register-page.component'

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  routes: Routes = [
    { path: './login-page', component: LoginPageComponent },
    { path: './register-page', component: RegisterPageComponent },
  ];

}

