import { Component, EventEmitter, OnInit,Input, Output,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { Contact } from '../model/contact.model';

@Component({
  selector: 'app-contact-edit-form',
  templateUrl: './contact-edit-form.component.html',
  styleUrls: ['./contact-edit-form.component.css']
})
export class ContactEditFormComponent {
  public contact: Contact;

  constructor(
    public dialogRef: MatDialogRef<ContactEditFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Contact) {
      this.contact = data;
    }

    onNoClick(): void {
      this.dialogRef.close(null);
    }
    onSaveClick(): void {
      this.dialogRef.close(this.contact);
    }
}
