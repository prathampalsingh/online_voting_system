import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
// export class AdminLoginGuardService implements CanActivate {
//   constructor(public router: Router) {
//   }

//   canActivate(): boolean {
//       if (!this.isAuthenticated()) {
//           this.router.navigate(['/login']);
//           return false;
//       } else {
//           return true;
//       }
//   }

//   isAuthenticated() {
//       return (localStorage.getItem('role') === 'admin');
//   }
// }

export class AdminLoginGuardService {
    
    constructor(private router: Router) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (!this.isAuthenticated()) {
            this.router.navigate(['/login']);
            return false;
        } else {
            return true;
        }

    }
    isAuthenticated(): boolean {
        return (localStorage.getItem('role') === 'admin');
    }
}

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
    return inject(AdminLoginGuardService).canActivate(next, state);
}