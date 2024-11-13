import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvoteComponent } from './addvote.component';

describe('AddvoteComponent', () => {
  let component: AddvoteComponent;
  let fixture: ComponentFixture<AddvoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddvoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddvoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
