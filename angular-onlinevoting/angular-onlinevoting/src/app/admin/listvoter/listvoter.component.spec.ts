import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListvoterComponent } from './listvoter.component';

describe('ListvoterComponent', () => {
  let component: ListvoterComponent;
  let fixture: ComponentFixture<ListvoterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListvoterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListvoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
