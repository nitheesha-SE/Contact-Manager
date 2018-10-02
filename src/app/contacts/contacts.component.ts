import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Contact } from '../model/contact.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ContactEditFormComponent } from '../contact-edit-form/contact-edit-form.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  public contacts: Array<Contact>;
  public contact: Contact;
  public contactId: string;
  public searchableList: string[];

  constructor(private contactsService: ContactsService, public dialog: MatDialog) {
   }

  ngOnInit() {
    this.getContacts();
    this.searchableList = ['firstName', 'lastName', 'email'];
  }

  getContacts() : void{
    this.contactsService.getContacts()
      .subscribe(contacts => this.contacts = contacts);
  }

  addContact() : void{
    let dialogRef = this.dialog.open(ContactEditFormComponent, {
      height: '400px',
      width: '600px',
      data: {
        firstName: '',
        lastName: '',
        email:''
    }
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result != null){
      this.contact = result;
      this.contactsService.postContact(result).subscribe(contactId => this.insertContactId(result,contactId) );
      console.log("Dialog result:",this.contact);
      }
    });
  }
  
  onDeleteContact(contact : Contact) : void{    
    this.contactsService.deleteContact(contact.id)
    .subscribe(success=>
      {
          var index = this.contacts.indexOf(contact, 0);
          if (index > -1)
          {
              this.contacts.splice(index, 1);
          }
      }
    );
  }
  onEditContact(contact : Contact) : void{
    this.contactsService.putContact(contact.id, contact).subscribe();
  }
  insertContactId(result: Contact, contactId: string)
  {
    this.contact = result;
    this.contact.id = contactId;
    this.contacts.push(this.contact);
  }

}
