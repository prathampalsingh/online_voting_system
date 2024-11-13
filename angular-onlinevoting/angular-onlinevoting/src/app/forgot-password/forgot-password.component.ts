import { Component } from '@angular/core';
import { VoterService } from '../voter.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  isShowPassword: boolean = false;
  userName: string = '';
  userPassword: string = '';
  userId: string = '';

  constructor(
    private service: VoterService
  ) {

  }

  getUserName(): void {
    this.service.getUserByEmail(this.userName).pipe(take(1)).subscribe((res) => {
      console.log('#####', res);
      if (res && res?.userId) {
        this.userId = res?.userId;
        this.isShowPassword = true; 
      }
    }, err => {
      if (err && err?.error?.message.includes('No value present')) {
        alert('Email is not present. Please write your email address');
      } else {
        alert('Something went wrong.');
      }
    });
  }

  changePassword(): void {
    this.service.changePassword(this.userId, this.userPassword).pipe(take(1)).subscribe((res) => {
      console.log('>>>>', res);
      if (res && res?.userId) {
        alert('Password change successfully');
        this.service.navigateToLink('login');
      }
    });
  }
}
