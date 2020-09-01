import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LootGroupSaveComponent } from './loot-group-save.component';

describe('LootGroupSaveComponent', () => {
  let component: LootGroupSaveComponent;
  let fixture: ComponentFixture<LootGroupSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LootGroupSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LootGroupSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
