import {NgModule} from "@angular/core";
import {ContactComponent} from "./contact.component";
import {CommonModule} from "@angular/common";

@NgModule({
    exports: [
        ContactComponent
    ],
    imports: [
        CommonModule
    ],
    declarations: [
        ContactComponent
    ]
})
export class ContactModule {

}
