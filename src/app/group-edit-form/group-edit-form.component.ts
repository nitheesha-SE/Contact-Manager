import { Component, EventEmitter, OnInit,Input, Output,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Group } from '../model/group.model';

@Component({
  selector: 'app-group-edit-form',
  templateUrl: './group-edit-form.component.html',
  styleUrls: ['./group-edit-form.component.css']
})
export class GroupEditFormComponent {

  constructor(
    public dialogRef: MatDialogRef<GroupEditFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Group, public dialog: MatDialog) {}

  @Output() editContactEvent = new EventEmitter<Group>();
  onSaveClick(): void {
    this.dialogRef.close(this.data);
  }
  onCancelClick(): void {
    this.dialogRef.close(null);
  }
}

