import { Npc } from './npc';

export interface Roll {
  npc: Npc,
  amountOfRolls: number,
  rolls: string[][] // items received in each roll that was tried out
}