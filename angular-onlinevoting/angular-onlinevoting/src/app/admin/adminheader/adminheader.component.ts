import { Component } from '@angular/core';
import { VoterService } from 'src/app/voter.service';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css']
})
export class AdminheaderComponent {
  constructor(
    private service: VoterService
  ) {}

  routeToLink(link: string): void {
    this.service.navigateToLink(link);
  }
}
