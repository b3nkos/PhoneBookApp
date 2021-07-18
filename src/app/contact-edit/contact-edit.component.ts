import {Component} from "@angular/core";

@Component({
  selector:'app-contact-edit',
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
export class ContactEditComponent {

}
