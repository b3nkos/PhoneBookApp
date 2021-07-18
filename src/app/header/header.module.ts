import {NgModule} from "@angular/core";
import {HeaderComponent} from "./header.component";
import {RouterModule} from "@angular/router";

@NgModule({
    exports: [
        HeaderComponent
    ],
    imports: [
        RouterModule
    ],
    declarations: [
        HeaderComponent
    ]
})
export class HeaderModule {

}
