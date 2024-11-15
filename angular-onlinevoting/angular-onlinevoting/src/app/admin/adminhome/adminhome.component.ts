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
    const role=localStorage.getItem('role');
    this.vservice.getAllVoterList().pipe(take(1)).subscribe((res) => {
      console.log("*******", res,localStorage);
      if (res && Array.isArray(res)){
        
        this.totalUsers=res.filter((item:any)=>item?.userRole!==role).length;

        this.activeVoter=res.filter((item:any)=>item?.activateAccount===true && item?.userRole!==role).length;
        this.totalVoted=res.filter((item:any)=>item?.status==='voted').length;
      }
   });
}
}