import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterhomeComponent } from './voterhome.component';

describe('VoterhomeComponent', () => {
  let component: VoterhomeComponent;
  let fixture: ComponentFixture<VoterhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoterhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoterhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
