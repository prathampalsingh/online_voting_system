import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { VoterService } from 'src/app/voter.service';

@Component({
  selector: 'app-listvoter',
  templateUrl: './listvoter.component.html',
  styleUrls: ['./listvoter.component.css']
})
export class ListvoterComponent {

  allVoters: any[] = [];
  constructor(
    private service: VoterService,
    private router:Router
  ) {
    this.getAllVoter();
  }

  getAllVoter(): void {
    this.service.getAllVoterList().pipe(take(1)).subscribe((res: any) => {
      this.allVoters = res.filter((item: any) => item?.userRole !== 'admin');
      console.log('>>>>>>', res);
    });
  }

  deleteUser(userId: number) {
    this.service.deleteUser(userId).subscribe(
      () => {
        this.getAllVoter();
        alert('Account deleted successfully');
      },
      (error) => {
        console.error('Error deleting user:', error);
      }
    );
  }

  updateUser(userId: any): void {
    console.log('####', userId);
    this.router.navigate(['/editvoter'],{ queryParams: { userId: userId}});
    // const dialogRef = this.dialog.open(UpdateProfileComponent, {
    //   data: { id: userId },
    //   maxWidth: '100vw',
    //   maxHeight: '100vh',
    //   height: '80%',
    //   width: '80%'
    // });
    // dialogRef.afterClosed().subscribe(() => {
    //   this.getAllUsers();
    // });
  }

  activateUser(user: any): void {
    user.activateAccount = true;
    this.service.activateUser(user?.userId).pipe(take(1)).subscribe((res: any) => {
      if (res && res === 'User Activated Successfully') {
        alert("Account Activate successfully");
        this.getAllVoter();
      }
    }, err => {
      alert("Error occured while update user.");
    })
  }
}
