import { Component } from '@angular/core';
import { VoterService } from '../voter.service';

@Component({
  selector: 'app-appheader',
  templateUrl: './appheader.component.html',
  styleUrls: ['./appheader.component.css']
})
export class AppheaderComponent {
  constructor(
    private voter: VoterService
  ) {}

  routeToLink(link: string): void {
    this.voter.navigateToLink(link);
  }
}
