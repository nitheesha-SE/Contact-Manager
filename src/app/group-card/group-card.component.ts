import { Component, EventEmitter, OnInit,Input, Output,Inject } from '@angular/core';
import { Group } from '../model/group.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { GroupEditFormComponent } from '../group-edit-form/group-edit-form.component';
import { GroupContactAddFormComponent } from '../group-contact-add-form/group-contact-add-form.component';
import { GroupContactRemoveFormComponent } from '../group-contact-remove-form/group-contact-remove-form.component';
import { Contact } from '../model/contact.model';
import { IdList } from '../model/idList.model';

@Component({
  selector: 'app-group-card',
  templateUrl: './group-card.component.html',
  styleUrls: ['./group-card.component.css']
})
export class GroupCardComponent  {
  public idLists: IdList;
  
  @Input() group: Group;
  constructor(public dialog: MatDialog) {}

   @Output() deletedGroupEvent = new EventEmitter<Group>();
   
   @Output() editGroupEvent = new EventEmitter<Group>();
   @Output() addGroupContactEvent = new EventEmitter<any>();
   @Output() deleteGroupContactEvent = new EventEmitter<any>();

  deleteGroup(){     
    this.deletedGroupEvent.emit(this.group);
  }

  editGroup(){
    let dialogRef = this.dialog.open(GroupEditFormComponent, {
      height: '400px',
      width: '600px',
      data: GroupCardComponent.deepCopy(this.group)
    });
    dialogRef.afterClosed().subscribe(group => {
      if(group !=null){
        this.group = group;
      this.editGroupEvent.emit(group);
      }
      console.log(`Dialog result: ${this.group.name}`);
    });
  }
  
  addContacts(){
    let dialogRef = this.dialog.open(GroupContactAddFormComponent, {
      height: '400px',
      width: '600px',
      data: this.group
    });
    dialogRef.afterClosed().subscribe(data => {
      if(data !=null){
        this.idLists = new IdList();
        this.idLists.Ids = data;
      this.addGroupContactEvent.emit({groupid: this.group.id, contactids: this.idLists});
      }
    });
  }

  removeContacts(){
    let dialogRef = this.dialog.open(GroupContactRemoveFormComponent,{
      height: '400px',
      width: '600px',
      data: this.group
    });

    dialogRef.afterClosed().subscribe(data => {
      if(data != null){
        this.idLists = new IdList();
        this.idLists.Ids = data;
      this.deleteGroupContactEvent.emit({groupid: this.group.id, contactids: this.idLists});
      }
    });
    
  }
  public static deepCopy(oldObj: any) {
    var newObj = oldObj;
    if (oldObj && typeof oldObj === "object") {
        newObj = Object.prototype.toString.call(oldObj) === "[object Array]" ? [] : {};
        for (var i in oldObj) {
            newObj[i] = this.deepCopy(oldObj[i]);
        }
    }
    return newObj;
  }
}
