import { Component, OnInit } from '@angular/core';
import { Npc } from '../shared/npc';
import { NpcsService } from '../npcs.service';
import { Roll } from '../shared/roll';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-roll',
  templateUrl: './roll.component.html',
  styleUrls: ['./roll.component.scss']
})
export class RollComponent implements OnInit {

  constructor(private npcService: NpcsService, private dialogRef: MatDialogRef<RollComponent>) { }

  npcs: Npc[];

  roll = {} as Roll;

  run() {
    this.dialogRef.close(this.roll);
  }

  ngOnInit(): void {
    this.npcs = this.npcService.getAll();
  }

}
