import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterheaderComponent } from './voterheader.component';

describe('VoterheaderComponent', () => {
  let component: VoterheaderComponent;
  let fixture: ComponentFixture<VoterheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoterheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoterheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
