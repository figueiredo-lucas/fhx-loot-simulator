import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpcSaveComponent } from './npc-save.component';

describe('NpcSaveComponent', () => {
  let component: NpcSaveComponent;
  let fixture: ComponentFixture<NpcSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpcSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpcSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
