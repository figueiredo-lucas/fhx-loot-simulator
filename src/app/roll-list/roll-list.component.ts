import { Component, OnInit } from '@angular/core';
import { Npc } from '../shared/npc';
import { NpcsService } from '../npcs.service';
import { MatDialog } from '@angular/material/dialog';
import { RollComponent } from '../roll/roll.component';
import { Roll } from '../shared/roll';
import { RollService } from '../roll.service';

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
    const dialogRef = this.dialog.open(RollComponent, { width: '40vw' });
    dialogRef.afterClosed().subscribe((roll: Roll) => {
      if (roll) {
        this.rollService.calculateRoll(roll);
        this.rolls.push(roll);
      }
    })
  }

  getRollWithDropsText(roll: Roll): number[] {
    return roll.rolls.reduce((acc, curr) => {
      acc[curr.length]++;
      return acc;
    }, [0, 0, 0, 0]);
  }

  ngOnInit(): void {
    this.npcs = this.npcService.getAll();
  }

}
