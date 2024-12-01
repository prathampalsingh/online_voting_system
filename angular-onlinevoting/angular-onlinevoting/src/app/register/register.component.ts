import { Component, numberAttribute } from '@angular/core';
import { VoterService } from '../voter.service';
import { take } from 'rxjs';
import { Router } from '@angular/router';
//it allows us to format date and time according to our desired format
//two types of pipe custom and built in 
//datepipe is builtin 
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-register',//define html tag/name for the component 
  templateUrl: './register.component.html',//path to the html template file
  styleUrls: ['./register.component.css']//path to the css template file
})
//export class = we can easily export this class anywhere in the application to reuse existing functionality
export class RegisterComponent {
  errorMessage: string = '';
  userMobileNumber: string = '';
  userAddress: string = '';
  userName: string = '';
  userVotingCardNumber = '';
  userEmail = '';
  userPassword = '';
  userDateOfBirth = '';
  userGender = 'male';
  maxDate: any;

  constructor(
    private route: Router,
    private service: VoterService,
    private datePipe: DatePipe
  ) {
    //save today's date
    const todayDate = new Date();
    //subtract today's day with 18 years, making sure user is 18+ and in year-month-day format
    this.maxDate = this.datePipe.transform(todayDate.setFullYear(todayDate?.getFullYear() - 18), "yyyy-MM-dd");
     }
    registerUser(): any {
      if (this.userName === '') {
        this.errorMessage = 'UserName should not be blank';
        document.getElementById('errordiv')?.scrollIntoView(true);
        return;
      }
      if (this.userName.length < 4) {
        this.errorMessage = 'UserName should be more than 3 chracter';
        document.getElementById('errordiv')?.scrollIntoView(true);
        return;
      }
      const userPartten = (/[A-Za-z]+$/)
      if (!userPartten.test(this.userName)) {
        this.errorMessage = 'UserName should Can not be Number';
        document.getElementById('errordiv')?.scrollIntoView(true);
        return;
      }

      if (this.userVotingCardNumber === '') {
        this.errorMessage = 'Voting Number should not be blank';
        document.getElementById('errordiv')?.scrollIntoView(true);
        return;
      }

      if (this.userVotingCardNumber.length !== 10) {
        this.errorMessage = 'Voting card Number should be exactly 10 characters';
        document.getElementById('errordiv')?.scrollIntoView(true);
        return;
      }
      if (this.userAddress === '') {
        this.errorMessage = 'Address should not be blank';
        document.getElementById('errordiv')?.scrollIntoView(true);
        return;
      }

      if (this.userAddress.length < 3) {
        this.errorMessage = 'Address name should be more than 3 chracter';
        document.getElementById('errordiv')?.scrollIntoView(true);
        return;
      }
      const addressPartten = /^[a-zA-Z0-9\s,.'-]{3,}$/ ;
      if (!addressPartten.test(this.userAddress)) {
        this.errorMessage = 'Address should contain number and character';
        document.getElementById('errordiv')?.scrollIntoView(true);
        return;
      }
      if (this.userMobileNumber === '') {
        this.errorMessage = 'Mobile Number name should not be blank';
        document.getElementById('errordiv')?.scrollIntoView(true);
        return;
      }

      const mobilePattern = /^[6-9]\d{9}$/;
      if (!mobilePattern.test(this.userMobileNumber)) {
        this.errorMessage = 'Mobile number should start between 6 to 9 And Exactly 10 Digits';
        document.getElementById('errordiv')?.scrollIntoView(true);
        return
      }
      if (this.userEmail === '') {
        this.errorMessage = 'Email Address should not be blank';
        document.getElementById('errordiv')?.scrollIntoView(true);
        return;
      }
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(this.userEmail)) {
        this.errorMessage = 'Please enter a valid email address';
        document.getElementById('errordiv')?.scrollIntoView(true);
        return;
      }
      if (this.userPassword === '') {
        this.errorMessage = 'Password should not be blank';
        document.getElementById('errordiv')?.scrollIntoView(true);
        return;
      }
      const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
      if (!passwordPattern.test(this.userPassword)) {
        //alert('Mobile numbner should start between 6 to 9. And it should be valid mobile number.');
        this.errorMessage = 'Password should be atleast 8 character and one upperltter and one character';
        document.getElementById('errordiv')?.scrollIntoView(true);
        return
      }
      
      const body: any = {
        userName: this.userName,
        userVotingCardNumber: this.userVotingCardNumber,
        userAddress: this.userAddress,
        userMobileNumber: this.userMobileNumber,
        userEmail: this.userEmail,
        userPassword: this.userPassword,
        userDateOfBirth: this.userDateOfBirth,
        userGender: this.userGender,
        // userRole: 'admin'
        userRole: 'voter'
      };
      //service is used to call the voterservices
      console.log('>>>>>', body);
      //.pipe format of dob
      //take 1 
      //return type is observable
      this.service.signUp(body).pipe(take(1)).subscribe((res: any) => {
        //local  temporary variable res type any 
        console.log('>>>>>>>>>>>>>>>>>>res', res);
        if (!!res && res === 'User Registered Successfully') {
          alert('You successfully register');
          this.service.navigateToLink('login');
        } else {
          alert('Please add valid information');
        }
      },
      (err:any)=>{
//error getting in string json format so we must need to parse JSON
console.log("DUPLICATE ENTRY",JSON.parse(err?.error));
const errMsg=JSON.parse(err?.error)?.message;
if(errMsg.includes("could not execute statement [Duplicate entry")){
alert('Voter id already in used. Use another!!!')
}
      }
    );
    }

    // routeToLogin(): void {
    //   this.route.navigate(["/login"]); //user-login
    // }
  }