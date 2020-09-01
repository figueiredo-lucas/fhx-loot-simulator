import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LootGroupComponent } from './loot-group.component';

describe('LootGroupComponent', () => {
  let component: LootGroupComponent;
  let fixture: ComponentFixture<LootGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LootGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LootGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
