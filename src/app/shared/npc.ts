import { Loot } from './loot';

export interface NpcLoot {
  probability: number,
  loot: Loot
}

export interface Npc {
  id: number,
  name: string,
  groups: NpcLoot[]
}