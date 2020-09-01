import { Component, OnInit } from '@angular/core';
import { Loot } from '../shared/loot';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-loot-group-save',
  templateUrl: './loot-group-save.component.html',
  styleUrls: ['./loot-group-save.component.scss']
})
export class LootGroupSaveComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<LootGroupSaveComponent>) { }

  get f() { return this.formLoot.controls; }
  get items() { return (<FormArray>this.f.items).controls }

  formLoot: FormGroup;

  save(): void {
    const loot: Loot = this.formLoot.value;
    loot.items = this.formLoot.value.items.map(i => i.name);
    this.dialogRef.close(loot);
  }

  addItem(): void {
    (<FormArray>this.f.items).push(this.formBuilder.group({ name: [''] }));
  }

  removeItem(i: number): void {
    (<FormArray>this.f.items).removeAt(i);
  }

  ngOnInit(): void {
    this.formLoot = this.formBuilder.group({
      name: [''],
      items: this.formBuilder.array([
        this.formBuilder.group({ name: [''] })
      ])
    })
  }

}
