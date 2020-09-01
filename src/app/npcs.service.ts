import { Injectable } from '@angular/core';
import { Npc } from './shared/npc';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class NpcsService {

  constructor(private storage: StorageService) { }

  private npcs: Npc[];

  getAll(): Npc[] {
    if (!this.npcs) {
      const npcs = this.storage.get('npc');
      this.npcs = npcs || [];
    }
    return this.npcs;
  }

  save(npc: Npc) {
    npc.id = this.npcs.reduce((a, c) => a > c.id ? a : c.id, 0) + 1;
    this.npcs.push(npc);
    this.storage.store('npc', this.npcs);
  }

  delete(idx: number) {
    this.npcs.splice(idx, 1);
    this.storage.store('npc', this.npcs);
  }
}
