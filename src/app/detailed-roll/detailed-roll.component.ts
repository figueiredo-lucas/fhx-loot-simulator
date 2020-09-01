import { Component, OnInit, Input, Inject } from '@angular/core';
import { Roll } from '../shared/roll';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detailed-roll',
  templateUrl: './detailed-roll.component.html',
  styleUrls: ['./detailed-roll.component.scss']
})
export class DetailedRollComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data: any) {
    this.roll = data.roll;
  }

  roll: Roll;

  ngOnInit(): void {
  }

}
