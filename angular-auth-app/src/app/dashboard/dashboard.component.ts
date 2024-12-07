import { Component } from '@angular/core';
import { AuthService } from '../auth.service';  //CC

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private authService: AuthService) { }
  logout() {
    this.authService.logout();
  }
}
