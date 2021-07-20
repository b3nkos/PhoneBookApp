import {Component, OnInit} from "@angular/core";
import {ContactModel} from "../contact/contact.model";
import {Router} from "@angular/router";
import {ContactService} from "../shared/contact.service";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html'
})
export class ContactListComponent implements OnInit {
  constructor(private router: Router, private contactService: ContactService) {
  }

  public contactList: ContactModel[] = [];

  ngOnInit(): void {
    this.contactService.getContacts().subscribe(contacts => {
      this.contactList = contacts;
    })
  }

  public onNewContact(): void {
    this.router.navigate(['/contact/new'])
  }
}
