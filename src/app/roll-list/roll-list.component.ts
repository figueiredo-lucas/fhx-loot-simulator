import { Component, OnInit } from '@angular/core';
import { Npc } from '../shared/npc';
import { NpcsService } from '../npcs.service';
import { MatDialog } from '@angular/material/dialog';
import { RollComponent } from '../roll/roll.component';
import { Roll } from '../shared/roll';
import { RollService } from '../roll.service';
import { DetailedRollComponent } from '../detailed-roll/detailed-roll.component';

@Component({
  selector: 'app-roll-list',
  templateUrl: './roll-list.component.html',
  styleUrls: ['./roll-list.component.scss']
})
export class RollListComponent implements OnInit {

  constructor(private npcService: NpcsService,
    private rollService: RollService,
    private dialog: MatDialog) { }

  rolls: Roll[] = [];
  npcs: Npc[];

  openModal() {
    const dialogRef = this.dialog.open(RollComponent);
    dialogRef.afterClosed().subscribe((roll: Roll) => {
      if (roll) {
        this.rollService.calculateRoll(roll);
        this.rollService.save(roll);
      }
    })
  }

  getRollWithDropsText(roll: Roll): number[] {
    return roll.rolls.reduce((acc, curr) => {
      acc[curr.length]++;
      return acc;
    }, [0, 0, 0, 0]);
  }

  openDetails(roll: Roll) {
    this.dialog.open(DetailedRollComponent, { data: { roll } });
  }

  ngOnInit(): void {
    this.npcs = this.npcService.getAll();
    this.rolls = this.rollService.getAll();
  }

}
