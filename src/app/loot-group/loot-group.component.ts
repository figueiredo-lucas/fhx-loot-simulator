import { Component, OnInit } from '@angular/core';
import { Loot } from '../shared/loot';
import { LootsService } from '../loots.service';
import { MatDialog } from '@angular/material/dialog';
import { LootGroupSaveComponent } from '../loot-group-save/loot-group-save.component';
import { NpcsService } from '../npcs.service';
import { Npc } from '../shared/npc';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-loot-group',
  templateUrl: './loot-group.component.html',
  styleUrls: ['./loot-group.component.scss']
})
export class LootGroupComponent implements OnInit {

  constructor(private lootsService: LootsService,
    private npcService: NpcsService,
    private dialog: MatDialog,
    private snackbar: MatSnackBar) { }

  loots: Loot[];
  private npcs: Npc[];

  openModal() {
    const dialogRef = this.dialog.open(LootGroupSaveComponent, { width: '60vw'});
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.lootsService.save(data);

      }
    })
  }

  delete(idx: number) {
    const hasLoot = this.npcs.some(n => {
      return n.groups.some(g => g.loot.id === this.loots[idx].id);
    })
    if (!hasLoot) {
      this.lootsService.delete(idx);
    } else {
      this.snackbar.open('Theres a Npc with this loot group you want to delete.');
    }
  }

  ngOnInit(): void {
    this.loots = this.lootsService.getAll();
    this.npcs = this.npcService.getAll();
  }

}
