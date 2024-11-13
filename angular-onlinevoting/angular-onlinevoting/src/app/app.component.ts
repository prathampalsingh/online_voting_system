import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { VoterService } from './voter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-onlinevoting';
  isLoggedIn: boolean = false;
  isAdminLoggedIn: boolean = false;
  constructor(
    private router: Router,
    private service:VoterService
    ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe((event: any) => {
      const role = localStorage.getItem("role");
      if (role !== null && role === 'voter') {
        setTimeout(() => {
          this.isLoggedIn = true;
          this.isAdminLoggedIn = false;
        }, 100);
      } else {
        if (role !== null && role === 'admin') {
          setTimeout(() => {
            this.isAdminLoggedIn = true;
            this.isLoggedIn = false;
          }, 100);
        } {
          setTimeout(() => {
            this.isLoggedIn = false;
            this.isAdminLoggedIn = false;
          }, 1);
        }
      }
    });
    this.service.getvotingEndDate();
    }

}
