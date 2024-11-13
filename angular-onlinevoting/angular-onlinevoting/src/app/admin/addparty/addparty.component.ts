import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { VoterService } from 'src/app/voter.service';

@Component({
  selector: 'app-addparty',
  templateUrl: './addparty.component.html',
  styleUrls: ['./addparty.component.css']
})
export class AddpartyComponent {
  errorMessage: string = '';
  partyName: string = '';
  partyLogo: string = '';
  partyLeaderName: string = '';
  partyId: any = '';
  isEdit: boolean = false;
  constructor(
    private service: VoterService,
    private activateRouter: ActivatedRoute
  ) {
    activateRouter.queryParams.subscribe((res: any) => {
      if (res?.partyId) {
        console.log('>>>>>>', res?.partyId);
        this.isEdit = true;
        this.getPartyData(res?.partyId);
      } else {
        this.isEdit = false;
      }
    });
  }

  getPartyData(pId: any) {
    this.service.getPartyById(pId).subscribe((res: any) => {
      console.log('>>>>>>>GG>>>', res);
      if (res && res?.partyId) {
        this.partyLeaderName = res?.partyLeaderName;
        this.partyId = res?.partyId;
        this.partyLogo = res?.partyLogo;
        this.partyName = res?.partyName;
      }
    });
  }

  addParty(): any {

    if (this.partyName === '') {
      this.errorMessage = 'Party name should not be blank';
      document.getElementById('errordiv')?.scrollIntoView(true);
      return;
    }
    if (this.partyLogo === '') {
      this.errorMessage = 'Party Logo should not be blank';
      document.getElementById('errordiv')?.scrollIntoView(true);
      return;
    }
    if (this.partyLeaderName === '') {
      this.errorMessage = 'Leader Name should not be blank';
      document.getElementById('errordiv')?.scrollIntoView(true);
      return;
    }

    const body: any = {
      partyName: this.partyName,
      partyLogo: this.partyLogo,
      partyLeaderName: this.partyLeaderName,
      votes: 0
    };

    this.service.addParty(body).pipe(take(1)).subscribe((res: any) => {
      console.log('>>>>>>>>>>>>>>>>', res);
      if (res && res === 'Party added successfully') {
        alert('Party Added successfully');
        this.service.navigateToLink('adminlistparty');
      }
    });
  }

  updateParty(): void {
    console.log('UPDTE');
    const body: any = {
      partyName: this.partyName,
      partyLogo: this.partyLogo,
      partyLeaderName: this.partyLeaderName,
      partyId: this.partyId
    };
    this.service.updateParty(body).subscribe((res: any) => {
      if (res && res?.partyId) {
        alert("Party Updated successfully");
        this.service.navigateToLink('adminlistparty');
      }
    });
  }

}
