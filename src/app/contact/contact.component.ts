import {Component, Input} from "@angular/core";
import {ContactModel} from "./contact.model";
import {Router} from "@angular/router";
import {ContactService} from "../shared/contact.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: [
    '.box {cursor: pointer}'
  ]
})
export class ContactComponent {
  error = ''

  constructor(private router: Router, private contactService: ContactService) {
  }

  @Input() public contact!: ContactModel;

  public onEditContact(): void {
    this.router.navigate(['contact/edit', this.contact.id]);
  }

  public onDelete(contactId: string): void {
    const onNext = (contact: ContactModel) => {
      this.contactService.contactWasDeletedSubject.next(contact);
    }

    const onError = (error: HttpErrorResponse) => {
      this.error = error.message;
    }

    const deleteConfirmation = confirm('Are you sure you want to delete the contact?');

    if (deleteConfirmation) {
      this.contactService.deleteContact(contactId).subscribe(onNext, onError);
    }

  }
}
