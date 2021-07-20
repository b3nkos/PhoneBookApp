import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ContactModel} from "../contact/contact.model";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private httpClient: HttpClient) {
  }

  public getContacts(): Observable<ContactModel[]> {
    return this.httpClient.get<ContactModel[]>('https://60f63aa718254c00176e01b2.mockapi.io/contacts')
      .pipe(
        map(contacts => {
          return contacts.map(contact => {
            return {
              ...contact,
              avatar: `https://ui-avatars.com/api/?name=${contact.name}`,
              createdAt: new Date(contact.createdAt)
            }
          })
        })
      )
  }

}
