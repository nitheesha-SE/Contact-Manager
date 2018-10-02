import { Component, EventEmitter, OnInit,Input, Output,Inject } from '@angular/core';
import { Contact } from '../model/contact.model';
import { ContactEditFormComponent } from '../contact-edit-form/contact-edit-form.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent {

  @Input() contact: Contact;
  
  constructor(public dialog: MatDialog) { }
   @Output() deletedContactEvent = new EventEmitter<Contact>();
   @Output() editContactEvent = new EventEmitter<Contact>();

   deleteContact(){     
     this.deletedContactEvent.emit(this.contact);
   }

   editContact(){
    let dialogRef = this.dialog.open(ContactEditFormComponent, {
      height: '500px',
      width: '500px',
      data: this.deepCopy(this.contact)
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result != null){
      this.contact = result;
      this.editContactEvent.emit(result);
      console.log(`Dialog result: ${result.firstName}`);
      }
      
    });
    
   }
   public deepCopy(oldObj: any) {
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
