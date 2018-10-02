import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../groups.service';
import { Group } from '../model/group.model';
import { GroupEditFormComponent } from '../group-edit-form/group-edit-form.component';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  public groups: Array<Group>;

  constructor(private groupsService: GroupsService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getGroups();
  }

  getGroups() : void{
    this.groupsService.getGroups()
      .subscribe(groups => this.groups = groups);
  }
  onEditGroup(group: Group) :void {
    ///console.log("edit function invoked");
    this.groupsService.putGroup(group.id, group).subscribe();
  }
  onDeleteGroup(contact : Group) : void{    
    this.groupsService.deleteGroup(contact.id)
    .subscribe(success=>
      {
          var index = this.groups.indexOf(contact, 0);
          if (index > -1)
          {
              this.groups.splice(index, 1);
          }
      }
    );
  }
  onAddGroupContact(ids: any): void
  {
    //console.log("contacts in group",ids.contactids);
    this.groupsService.postGroupContacts(ids.groupid, ids.contactids).subscribe();
  }
  onDeleteGroupContact(ids: any): void
  {
    //console.log("delete contacts", ids.contactids);
    this.groupsService.deleteGroupContacts(ids.groupid, ids.contactids).subscribe();

  }
  addGroup() : void{
    let dialogRef = this.dialog.open(GroupEditFormComponent, {
      height: '400px',
      width: '600px',
      data: {
        name: '',
        description: ''
    }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.groupsService.postGroup(result).subscribe(groupId => this.pushToGroups(result,groupId));
    });
  }
  pushToGroups(result: Group,groupId: string)
  {
    result.id = groupId;
    this.groups.push(result);
  }

}
