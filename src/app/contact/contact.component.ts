import {Component, Input} from "@angular/core";
import {ContactModel} from "./contact.model";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  @Input() public contact: ContactModel;

}
