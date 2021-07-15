import {Component} from "@angular/core";
import {ContactModel} from "../contact/contact.model";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html'
})
export class ContactListComponent {
  public contactList: ContactModel[] = [
    new ContactModel(1, 'Juan', 'juan@gmail.com', '5667745'),
    new ContactModel(2, 'Ana', 'ana@gmail.com', '77856'),
    new ContactModel(3, 'Julian', 'julian@gmail.com', '867765'),
    new ContactModel(4, 'Carlos', 'carlos@gmail.com', '993334'),
    new ContactModel(5, 'Karen', 'karen@gmail.com', '953233')
  ];

}
