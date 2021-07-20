export class ContactModel {
  constructor(public id: string, public name: string,
              public email: string, public phone: string, public avatar: string, public createdAt: Date) {
  }
}
