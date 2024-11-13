import { Component } from '@angular/core';
import { VoterService } from 'src/app/voter.service';

@Component({
  selector: 'app-voterheader',
  templateUrl: './voterheader.component.html',
  styleUrls: ['./voterheader.component.css']
})
export class VoterheaderComponent {
  uName: string = '';
  constructor(
    private service: VoterService
) {
  this.uName = localStorage.getItem('uname') ?? '';
}

  routeToLink(link: string): void {
    this.service.navigateToLink(link);
  }
}
