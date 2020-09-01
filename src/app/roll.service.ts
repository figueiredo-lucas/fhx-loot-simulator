import { Injectable } from '@angular/core';
import { Roll } from './shared/roll';
import { NpcLoot } from './shared/npc';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class RollService {

  constructor(private storage: StorageService) { }

  rolls: Roll[];

  getAll(): Roll[] {
    if (!this.rolls) {
      const rolls = this.storage.get('roll');
      this.rolls = rolls || [];
    }
    return this.rolls;
  }

  save(roll: Roll) {
    this.rolls.push(roll);
    this.storage.store('roll', this.rolls);
  }

  calculateRoll(roll: Roll) {
    roll.rolls = [];
    for (let i = 0; i < roll.amountOfRolls; i++) {
      roll.rolls.push([]);
      this.generateRollValues(roll, i);
    }
    console.log(roll);
  }

  private generateRollValues(roll: Roll, rollIdx: number, divider: number = 0) {
    const percentageSum = roll.npc.groups.reduce((acc, curr) => acc + curr.probability, 0);
    let canDrop = Math.random() <= Math.min(0.8, (percentageSum / Math.pow(2, divider)));
    if (canDrop) {
      const normArray = this.getNormalizedArray(roll.npc.groups, percentageSum);
      const chance = Math.random();
      let currBaseChance = 0;
      const idx = normArray.findIndex(n => {
        if (chance >= currBaseChance && chance < (currBaseChance + n)) {
          return true;
        }
        currBaseChance = n;
        return false;
      })
      const selectedLootGroup = roll.npc.groups.sort((a, b) => a.probability - b.probability)[idx];
      const item = selectedLootGroup.loot.items[this.getRandom(selectedLootGroup.loot.items.length)];
      roll.rolls[rollIdx].push(item);
    }
    if (canDrop && divider < 2) this.generateRollValues(roll, rollIdx, ++divider);
  }

  private getNormalizedArray(groups: NpcLoot[], sum: number): number[] {
    return groups.sort((a, b) => a.probability - b.probability).map(l => l.probability / sum);
  }

  private getRandom(max: number) {
    return Math.floor(Math.random() * max);
  }
}
