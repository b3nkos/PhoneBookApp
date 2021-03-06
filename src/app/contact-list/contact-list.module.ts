import {NgModule} from "@angular/core";
import {ContactListComponent} from "./contact-list.component";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {ContactModule} from "../contact/contact.module";
import {LoadingSpinnerModule} from "../loading-spinner/loading-spinner.module";

@NgModule({
  declarations: [
    ContactListComponent
  ],
    imports: [
        CommonModule,
        ContactModule,
        RouterModule.forChild([
            {path: '', component: ContactListComponent}
        ]),
        LoadingSpinnerModule,
    ]
})
export class ContactListModule {

}
