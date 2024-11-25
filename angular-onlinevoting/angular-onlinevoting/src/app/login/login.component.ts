import { Component } from '@angular/core';
import { VoterService } from '../voter.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
//export class = we can easily export this class anywhere in the application to reuse existing functionality
export class LoginComponent {

  loginType: string = 'voter';
  voterCardNumber: string = '';
  email: string = '';
  password: string = '';
  errorMessage:string='';

  constructor(
    private service: VoterService
  ) {}

  login(): void {
    const body: any = {
      "userPassword": this.password
    }
    let requstType: any = null;
    let flag = 0;
    
    if (this.loginType === 'voter') {
      if (this.voterCardNumber === '') {
        // alert('Voter card should not be blank');
        this.errorMessage = 'Voter card should not be blank';
        return;
      }
      if (this.password === '') {
        this.errorMessage = 'Password should not be blank';
        return;
      }
    } else if (this.loginType === 'admin'){
      if (this.email === '') {
       //  alert('Email address should not be blank');
        this.errorMessage = 'Email address should not be blank';
        return;
      }
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(this.email)) {
        this.errorMessage = 'Please enter a valid email address';
        return;
      }
      if (this.password === '') {
        this.errorMessage = 'Password should not be blank';
        return;
      }
    }
    this.errorMessage = '';

    if (this.loginType === 'voter') {
      body.userVotingCardNumber = this.voterCardNumber;
      requstType = this.service.signInByCard(body);
    } else {
      body.userEmail = this.email
      requstType = this.service.signInByEmail(body);
    }
    requstType.pipe(take(1)).subscribe((response: any) => {
      console.log('>>>>', response);
      if (response?.userRole === 'voter' && response?.activateAccount === false) {
        // alert('Your account is not active, Please try after some time');
        this.errorMessage = 'Your account is not active, Please try after some time';

        return;
      }
      this.service.storeLoggedInUser(response);
      localStorage.setItem('uname', response?.userName);
      localStorage.setItem('uId', response?.userId);
      localStorage.setItem('role', response?.userRole);
      if (response?.userRole === 'voter') {
        this.service.navigateToLink('voterhome');
      } else {
        this.service.navigateToLink('adminhome');
      }
    }, (err:any)=>{
    console.log("$$$$$$$$$$$$$$$",err);
    this.errorMessage="Incorrect user credential";
    })
  }
  clearMessage(): void {
    this.errorMessage = '';
  }

  openForgotPassword(): void {
    this.service.navigateToLink('forgotpassword');
  }
}