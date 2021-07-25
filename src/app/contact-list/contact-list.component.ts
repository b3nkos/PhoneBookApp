import {Component, OnDestroy, OnInit} from "@angular/core";
import {ContactModel} from "../contact/contact.model";
import {Router} from "@angular/router";
import {ContactService} from "../shared/contact.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html'
})
export class ContactListComponent implements OnInit, OnDestroy {
  isLoading = false;
  isListEmpty = false;
  showContactDeleteAlert = false;
  contactDelete!: ContactModel;
  public contactList: ContactModel[] = [];
  contactWasDeletedSubscription = new Subscription();

  constructor(private router: Router, private contactService: ContactService) {
  }

  ngOnInit(): void {
    this.loadContacts();

    this.contactWasDeletedSubscription = this.contactService
      .contactWasDeletedSubject.subscribe((contact: ContactModel) => {
        this.contactDelete = contact;
        this.showContactDeleteAlert = true;
        this.loadContacts();
      });
  }

  private loadContacts(): void {
    this.isLoading = true;

    const onNext = (contacts: ContactModel[]) => {
      this.contactList = contacts;
      this.isLoading = false
      if (this.contactList.length === 0) {
        this.isListEmpty = true;
      }
    }

    this.contactService.getContacts().subscribe(onNext);
  }

  public onNewContact(): void {
    this.router.navigate(['/contact/new'])
  }

  ngOnDestroy(): void {
    this.contactWasDeletedSubscription.unsubscribe();
  }
}
