import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Contact } from './model/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private _url : string = "http://localhost:50778/api/contact/";

  constructor(private http: HttpClient) { }

  public getContacts(){
    return this.http.get<Array<Contact>>(this._url);
  }

  public getContact(id: string){
    return this.http.get<Contact>(this.getResourceUrl(id));
  }

  public postContact(contact: Contact){
    console.log("service contact",contact);
    return this.http.post<string>(this._url, contact);
  }

  public putContact(id: string, contact: Contact){
    return this.http.put(this.getResourceUrl(id), contact);
  }

  public deleteContact(id: string){
    return this.http.delete(this.getResourceUrl(id));
  }

  private getResourceUrl(id: string): string{
    return this._url + `/${id}`;
  }
}
