import { Component, EventEmitter, OnInit,Input, Output,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ContactsService } from '../contacts.service';
import { Contact } from '../model/contact.model';
import { Group } from '../model/group.model';

@Component({
  selector: 'app-group-contact-remove-form',
  templateUrl: './group-contact-remove-form.component.html',
  styleUrls: ['./group-contact-remove-form.component.css']
})
export class GroupContactRemoveFormComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  contacts =[];
  constructor(private contactsService: ContactsService,  public dialogRef: MatDialogRef<GroupContactRemoveFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Group, public dialog: MatDialog){
  }
  ngOnInit () {
    this.dialogRef.updateSize('50%', '80%');
    this.dropdownList = this.data.contacts;
    this.selectedItems = [];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'firstName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
      maxHeight:140
    };
  }
  onItemSelect (item:any) {
  }
  onSelectAll($item: any)
  {

  }
  onRemoveClick()
  {

    let ids = this.selectedItems.map(x=> x.id);
    this.data.contacts = this.data.contacts.filter(item => ids.indexOf(item.id) < 0);
    //console.log("group contact ids for remove",this.selectedItems.map(x => x.id));
    this.dialogRef.close(this.selectedItems.map(x => x.id));
  }
  onCancelClick()
  {
    this.dialogRef.close();
  }
}
