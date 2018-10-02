import { Contact } from '../model/contact.model';
export interface Group {
    id : string;
    name: string;
    description: string;
    contacts: Array<Contact>;
}