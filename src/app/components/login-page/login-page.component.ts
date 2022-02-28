import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginform = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private authService: AuthService, private toast: HotToastService, private router: Router) { }

  ngOnInit(): void {
  }


  get email() {
    return this.loginform.get('email');
  }

  get password() {
    return this.loginform.get('password');
  }

  submit() {
    if (!this.loginform.valid) {
      return;

    }

    const { email, password } = this.loginform.value;
    this.authService.login(email, password).pipe(this.toast.observe({
      success: 'Logged in successfully',
      loading: 'Logging in...',
      error: ({ message }) => `There was an error: ${message} `
    })).subscribe(() => {
      this.router.navigate(['/posts']);
    });

  }

}
