import { Component, OnInit } from '@angular/core';
import { NpcSaveComponent } from '../npc-save/npc-save.component';
import { MatDialog } from '@angular/material/dialog';
import { NpcsService } from '../npcs.service';
import { Npc } from '../shared/npc';

@Component({
  selector: 'app-npc',
  templateUrl: './npc.component.html',
  styleUrls: ['./npc.component.scss']
})
export class NpcComponent implements OnInit {

  constructor(private dialog: MatDialog, private npcService: NpcsService) { }

  npcs: Npc[];

  openModal() {
    const dialogRef = this.dialog.open(NpcSaveComponent);
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.npcService.save(data);
      }
    })
  }

  delete(idx: number) {
    this.npcService.delete(idx);
  }

  ngOnInit(): void {
    this.npcs = this.npcService.getAll();
  }

}
