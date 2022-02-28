import { AuthService } from 'src/app/services/auth-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService: AuthService) { }
  title = 'dailyApp';
  user$ = this.authService.currentUser$;


}
