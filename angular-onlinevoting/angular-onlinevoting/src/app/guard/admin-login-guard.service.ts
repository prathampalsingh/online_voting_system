import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AdminLoginGuardService implements CanActivate {
  constructor(public router: Router) {
  }

  canActivate(): boolean {
      if (!this.isAuthenticated()) {
          this.router.navigate(['/login']);
          return false;
      } else {
          return true;
      }
  }

  isAuthenticated() {
      return (localStorage.getItem('role') === 'admin');
  }
}