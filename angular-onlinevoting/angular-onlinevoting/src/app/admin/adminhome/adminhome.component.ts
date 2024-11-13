import { Component } from '@angular/core';
import { take } from 'rxjs';
import { VoterService } from 'src/app/voter.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent {
  totalUsers: number = 0;
  activeVoter:number=0;
  totalParties:number=0;
  totalVoted:number=0;
  constructor(private vservice: VoterService) {

  }

  ngOnInit(): void {
    this.vservice.getAllVoterList().pipe(take(1)).subscribe((res) => {
      console.log("***", res);
      if (res && Array.isArray(res)){
        this.totalUsers=res.length;
        this.activeVoter=res.filter((item:any)=>item?.activateAccount===true).length;
        this.totalVoted=res.filter((item:any)=>item?.status==='voted').length;
      }
   });
   this.vservice.getAllParty().pipe(take(1)).subscribe((res) => {
    console.log("***", res);
    if (res && Array.isArray(res)){
           this.totalParties=res.length;
    }
  });
  }
}

