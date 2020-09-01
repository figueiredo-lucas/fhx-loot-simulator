import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LootGroupComponent } from './loot-group/loot-group.component';
import { NpcComponent } from './npc/npc.component';
import { LootGroupSaveComponent } from './loot-group-save/loot-group-save.component';
import { NpcSaveComponent } from './npc-save/npc-save.component';
import { RollComponent } from './roll/roll.component';
import { RollListComponent } from './roll-list/roll-list.component';
import { DetailedRollComponent } from './detailed-roll/detailed-roll.component';

@NgModule({
  declarations: [
    AppComponent,
    LootGroupComponent,
    NpcComponent,
    LootGroupSaveComponent,
    NpcSaveComponent,
    RollComponent,
    RollListComponent,
    DetailedRollComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatSelectModule
  ],
  providers: [{
    provide: MatDialogRef,
    useValue: {}
  },],
  bootstrap: [AppComponent],
  entryComponents: [
    LootGroupSaveComponent,
    NpcSaveComponent
  ]
})
export class AppModule { }
