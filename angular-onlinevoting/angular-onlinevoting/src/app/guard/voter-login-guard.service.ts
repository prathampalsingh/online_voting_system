import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

@Injectable(
)
// export class VoterLoginGuardService implements CanActivate {
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
//       return (localStorage.getItem('role') === 'voter');
//   }
// }

export class VoterLoginGuardService {
    
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
        return (localStorage.getItem('role') === 'voter');
    }
}

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
    return inject(VoterLoginGuardService).canActivate(next, state);
}