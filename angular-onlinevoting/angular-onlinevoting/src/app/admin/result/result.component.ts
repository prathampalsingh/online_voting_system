import { Component } from '@angular/core';
import { take } from 'rxjs';
//import { take } from 'rxjs';
import { VoterService } from 'src/app/voter.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  allParty: any[] = [];
  winingParty: any;
  constructor(
    private service: VoterService
  ) {
    this.service.getAllParty().pipe(take(1)).subscribe((res: any) => {
      if (!!res) {
        console.log('>>>>##>>', res);
        this.allParty = res;
        if (this.allParty?.length > 1) {
          this.getWiningPart();
        }
      }
    });
  }

  getWiningPart(): void {
    let max = this.allParty[0]?.votes;
    this.winingParty = this.allParty[0];
    for (let i = 1; i < this.allParty.length; i++) {
      console.log(this.allParty[i]?.votes, '>>>>', max)
      if (this.allParty[i]?.votes > max) {
        max = this.allParty[i]?.votes;
        this.winingParty = this.allParty[i];
      }
    }
  }
}
