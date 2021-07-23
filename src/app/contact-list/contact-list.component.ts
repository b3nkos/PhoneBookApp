import {Component, OnInit} from "@angular/core";
import {ContactModel} from "../contact/contact.model";
import {Router} from "@angular/router";
import {ContactService} from "../shared/contact.service";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html'
})
export class ContactListComponent implements OnInit {
  isLoading = false;
  isListEmpty = false;
  public contactList: ContactModel[] = [];

  constructor(private router: Router, private contactService: ContactService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.contactService.getContacts().subscribe(contacts => {
      this.contactList = contacts;
      this.isLoading = false
      if(this.contactList.length === 0) {
        this.isListEmpty = true;
      }
    })
  }

  public onNewContact(): void {
    this.router.navigate(['/contact/new'])
  }
}
