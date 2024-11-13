import { AfterViewInit, Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { VoterService } from 'src/app/voter.service';

@Component({
  selector: 'app-addvote',
  templateUrl: './addvote.component.html',
  styleUrls: ['./addvote.component.css']
})
export class AddvoteComponent implements OnInit, AfterViewInit {

  user: any = null;
  allParty: Array<any> = [];
  selectedParty = '';
  constructor(
    private service: VoterService
  ) {
   
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      const currentDate = new Date().getTime();
      const electionDate = this.service.electionDate.getTime();
      console.log('****',new Date(electionDate), '  >>>>>   ', new Date(currentDate))
      if (currentDate > electionDate) {
        alert('Election is closed');
        this.service.navigateToLink('voterhome');
        return;
      }
      this.getUserInformation();
      this.service.getAllParty().pipe(take(1)).subscribe((res: any) => {
        if (!!res) {
          
          console.log('>>>>##>>', res);
          this.allParty = res;
        }
      });
    }, 1000);
   
  }

  ngOnInit(): void {
   
  }
  getUserInformation() {
    const id = localStorage.getItem('uId');
    this.service.getUserById(id).pipe(take(1)).subscribe((res: any) => {
      if (!!res) {
        this.user = res;
        console.log('>>>>>>', this.user);
      }
    });
  }

  submit(): void {
    console.log('>>>>>>>>>>', this.selectedParty);
    if (this.selectedParty === '') {
      alert('Please select party for vote');
      return;
    }
    const id = localStorage.getItem('uId');
    this.service.addVote(this.selectedParty, id).pipe(take(1)).subscribe((res: any) => {
      console.log('>>>>>>$$$', res);
      if (res && res?.vote === 'Vote Added') {
        this.getUserInformation();
      }
    });
  }

}
