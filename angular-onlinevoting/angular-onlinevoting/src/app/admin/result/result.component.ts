import { Component } from '@angular/core';
import { take } from 'rxjs';
//import { take } from 'rxjs';
import { VoterService } from 'src/app/voter.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  allParty: any[] = [];
  winingParty: any;
  public chart: any;

  constructor(
    private service: VoterService
  ) {
    Chart.register(...registerables);
    this.service.getAllParty().pipe(take(1)).subscribe((res: any) => {
      if (!!res) {
        this.allParty = res;
        if (this.allParty?.length > 1) {
          this.getWiningPart();
        }
        //using map generate new array-->partyname
        const nameList = res.map((item: any) => item?.partyLeaderName);
        
        const voteData: any = [];
        res.forEach((item: any) => {
          voteData.push(
            item?.votes
          )
          
        });
//package.json -> line 31,32 , app.module.ts -> line 29 , main.ts -> line 6 and 11 to 13 , result.ts and html
// chart format = https://www.chartjs.org/docs/latest/charts/bar.html
        this.chart = new Chart("Chart", {
          type: 'bar',
          data: {
            labels: nameList, // X-axis labels
            datasets:
              [
                {
                  data: voteData, // Data for the dataset
                  label: "",  // Label for the dataset
                  backgroundColor: '#FF5733', // Custom color for the bars
                  borderColor: '#FF5733', // Border color for the bars
                  borderWidth: 1
                }
              ]
          }
        });
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