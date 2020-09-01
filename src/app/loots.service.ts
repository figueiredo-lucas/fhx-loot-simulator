import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Loot } from './shared/loot';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class LootsService {

  constructor(private storage: StorageService) { }

  private loots: Loot[];

  getAll(): Loot[] {
    if (!this.loots) {
      const loots = this.storage.get('loot');
      this.loots = loots || [];
    }
    return this.loots;
  }

  save(loot: Loot) {
    loot.id = this.loots.reduce((a, c) => a > c.id ? a : c.id, 0) + 1;
    this.loots.push(loot);
    this.storage.store('loot', this.loots);
  }

  delete(idx: number) {
    this.loots.splice(idx, 1);
    this.storage.store('loot', this.loots);
  }
}
