import { Component, EventEmitter, OnInit,Input, Output,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormControl} from '@angular/forms';
import { Contact } from '../model/contact.model';
import { ContactsComponent } from '../contacts/contacts.component';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-group-contact-add-form',
  templateUrl: './group-contact-add-form.component.html',
  styleUrls: ['./group-contact-add-form.component.css']
})
export class GroupContactAddFormComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  contacts =[];
  constructor(private contactsService: ContactsService,  public dialogRef: MatDialogRef<GroupContactAddFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Group, public dialog: MatDialog){
  }
  ngOnInit () {
    this.dialogRef.updateSize('50%', '80%');
    this.contactsService.getContacts()
      .subscribe(contacts => this.dropdownlist(contacts));
  }
  dropdownlist(contacts: Array<Contact>){
    let addcontacts;
    console.log("ihdguijhx",this.data.contacts);
    if(this.data.contacts ){
      let ids = this.data.contacts.map(x=> x.id);
      addcontacts = contacts.filter(item => ids.indexOf(item.id) < 0);
    }
    else {
      addcontacts = contacts;
    }
    this.dropdownList = addcontacts;
    this.selectedItems = [];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'firstName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
      maxHeight: 140
    };
  }
  onItemSelect (item:any) {
    //console.log(item);
  }
  onSelectAll(item:any) {

  }
  onSaveClick()
  {
    if(this.data.contacts) {
      this.data.contacts = this.data.contacts.concat(this.selectedItems);
    }
    else this.data.contacts = this.selectedItems;
    this.dialogRef.close(this.selectedItems.map(x => x.id));
  }
  onCancelClick()
  {
    this.dialogRef.close();
  }
 
  
  
}
