import {Component, OnInit, ViewChild} from "@angular/core";
import {NgForm} from "@angular/forms";
import {ContactService} from "../shared/contact.service";
import {ContactModel} from "../contact/contact.model";
import {HttpErrorResponse} from "@angular/common/http";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styles: [
    `
      input.ng-invalid.ng-touched,
      textarea.ng-invalid.ng-touched {
        border: 1px solid red;
      }
    `
  ]
})
export class ContactEditComponent implements OnInit {
  newContactCreated = false;
  public error: string = '';
  isLoading = false;
  isNewContact = false;
  contactId = '';
  @ViewChild('contactForm', {static: false}) contactForm!: NgForm;
  contact!: ContactModel;

  constructor(private contactService: ContactService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.route.params.subscribe((params: Params) => {
      if (!params.id) {
        this.isLoading = false;
        this.isNewContact = true;
      } else {
        this.contactId = params.id;
      }
    });

    if (this.isNewContact) return;

    const onGetContact = (contact: ContactModel) => {
      this.contact = contact;
      this.isLoading = false
      this.contactForm.setValue({
        name: contact.name,
        email: contact.email,
        phone: contact.phone
      });
    }

    this.contactService.getContact(this.contactId).subscribe(onGetContact);
  }

  public onSubmitForm(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    const onNext = (contact: ContactModel) => {
      this.contact = contact;
      this.newContactCreated = true
      form.reset()
    }

    const onError = (error: HttpErrorResponse) => {
      this.error = error.message;
    }

    this.contactService.createContact(form.value).subscribe(onNext, onError);
  }

}
