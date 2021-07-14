import {Component} from "@angular/core";
import {ContactModel} from "../contact/contact.model";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html'
})
export class ContactListComponent {
  public contactList: ContactModel[] = [
    new ContactModel('1', 'Juan', 'juan@gmail.com'),
    new ContactModel('2', 'Ana', 'ana@gmail.com'),
  ];

}
