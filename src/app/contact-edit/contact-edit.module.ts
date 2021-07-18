import {NgModule} from "@angular/core";
import {ContactEditComponent} from "./contact-edit.component";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ContactEditComponent
  ],
  imports: [
    RouterModule.forChild([
      {path: 'new', component: ContactEditComponent},
      {path: 'edit/:id', component: ContactEditComponent},
      {path: '**', redirectTo: '/contact-list', pathMatch: 'full'},
    ]),
    FormsModule
  ]
})
export class ContactEditModule {

}
