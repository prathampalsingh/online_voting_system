import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VoterService } from 'src/app/voter.service';

@Component({
  selector: 'app-edit-voter',
  templateUrl: './edit-voter.component.html',
  styleUrls: ['./edit-voter.component.css']
})
export class EditVoterComponent {
  address: string = '';
  mobile: string = '';
  username: string = '';
  gender: string = '';
  dateofbirth: string = '';
  email: string  = '';
  userId: any = '';
  ; constructor(
    private service: VoterService,
    private activteRouter: ActivatedRoute,
    private router: Router
  ) {
    activteRouter.queryParams.subscribe((res: any) => {
      console.log('>>>>>>>>', res);
      if (res?.userId) {
        this.service.getUserById(res?.userId).subscribe((resp: any) => {
          console.log('>>>>>>', resp)
          this.userId = res?.userId;
          if (resp?.userAddress) {
            this.address = resp?.userAddress;
          }
          if (resp?.userMobileNumber) {
            this.mobile = resp?.userMobileNumber;
          }
          if (resp?.userName) {
            this.username = resp?.userName;
          }
          if (resp?.userGender) {
            this.gender = resp?.userGender;
          }
          if (resp?.userDateOfBirth) {
            this.dateofbirth = resp?.userDateOfBirth
          }
          if (resp?.userEmail) {
            this.email = resp?.userEmail
          }
        });
      }
    });
  }

  onUpdate(): void {
    const body: any = {
      userAddress: this.address,
      userMobileNumber: this.mobile,
      userName: this.username,
      userGender: this.gender,
      userDateOfBirth: this.dateofbirth,
      userEmail: this.email,
      userId: this.userId
    };
    console.log('.>>>>>', body);
    this.service.updateUser(body).subscribe((res: any) => {
      if (res && res?.userId) {
        alert('User Update Successfully');
        this.router.navigate(['/adminlistvoter']);
      }
    });
  }
}
