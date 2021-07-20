import {Component, Input} from "@angular/core";
import {ContactModel} from "./contact.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: [
    '.box {cursor: pointer}'
  ]
})
export class ContactComponent {
  constructor(private router: Router) {
  }
  @Input() public contact: ContactModel = {
    id: '',
    name: '',
    email: '',
    phone: '',
    avatar: '',
    createdAt: new Date()
  };

  public onEditContact(): void {
    console.log(this.contact.id)
    this.router.navigate(['contact/edit', this.contact.id]);
  }


}
