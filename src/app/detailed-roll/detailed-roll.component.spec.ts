import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedRollComponent } from './detailed-roll.component';

describe('DetailedRollComponent', () => {
  let component: DetailedRollComponent;
  let fixture: ComponentFixture<DetailedRollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedRollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedRollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
