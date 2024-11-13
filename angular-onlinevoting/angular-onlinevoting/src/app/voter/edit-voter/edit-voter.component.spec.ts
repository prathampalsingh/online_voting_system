import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVoterComponent } from './edit-voter.component';

describe('EditVoterComponent', () => {
  let component: EditVoterComponent;
  let fixture: ComponentFixture<EditVoterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditVoterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditVoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
