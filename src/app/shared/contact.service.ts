import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {ContactModel} from "../contact/contact.model";
import {map} from "rxjs/operators";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contactWasDeletedSubject = new Subject<ContactModel>();

  constructor(private httpClient: HttpClient) {
  }

  public getContacts(): Observable<ContactModel[]> {
    return this.httpClient.get<ContactModel[]>(environment.endpoint)
      .pipe(
        map(contacts => {
          return contacts.map(contact => {
            return {
              ...contact,
              avatar: `${environment.avatarUrl}?name=${contact.name}`,
              createdAt: new Date(contact.createdAt)
            }
          })
        })
      )
  }

  public getContact(id: string): Observable<ContactModel> {
    return this.httpClient.get<ContactModel>(`${environment.endpoint}/${id}`)
      .pipe(
        map(contact => {
          return {
            ...contact,
            avatar: `${environment.avatarUrl}?name=${contact.name}`,
            createdAt: new Date(contact.createdAt)
          }
        })
      )
  }

  public createContact(contact: ContactModel): Observable<ContactModel> {
    return this.httpClient.post<ContactModel>(environment.endpoint, {
      ...contact
    });
  }

  public editContact(contactId: string, contact: ContactModel): Observable<ContactModel> {
    return this.httpClient.put<ContactModel>(`${environment.endpoint}/${contactId}`, {
      ...contact
    });
  }

  public deleteContact(contactId: string): Observable<ContactModel> {
    return this.httpClient.delete<ContactModel>(`${environment.endpoint}/${contactId}`);
  }
}
