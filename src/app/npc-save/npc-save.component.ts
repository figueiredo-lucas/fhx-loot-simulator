import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Npc, NpcLoot } from '../shared/npc';
import { LootsService } from '../loots.service';
import { Loot } from '../shared/loot';

@Component({
  selector: 'app-npc-save',
  templateUrl: './npc-save.component.html',
  styleUrls: ['./npc-save.component.scss']
})
export class NpcSaveComponent implements OnInit {

  constructor(private lootService: LootsService,
    private dialogRef: MatDialogRef<NpcSaveComponent>) { }

  npc = { groups: []} as Npc;
  loots: NpcLoot[];

  save(): void {
    this.dialogRef.close(this.npc);
  }

  fieldFocus(event: Event) {
    event.stopImmediatePropagation();
    event.stopPropagation();
  }

  ngOnInit(): void {
    this.loots = this.lootService.getAll().map<NpcLoot>(l => {
      return {
        probability: 0,
        loot: l
      }
    });
  }

}
