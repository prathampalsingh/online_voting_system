import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpartyComponent } from './listparty.component';

describe('ListpartyComponent', () => {
  let component: ListpartyComponent;
  let fixture: ComponentFixture<ListpartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListpartyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListpartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
