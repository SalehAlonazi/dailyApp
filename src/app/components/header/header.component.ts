import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  dropdown: boolean = false
  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
