import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';

//interface can be used to create types to describe object literals
export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  public attributes: Attributes<UserProps>;

  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }
  //getting reference to method on eventing class
  get on() {
    return this.events.on;
  }
  
  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }
}

//accessors "getter"
// class Person {
//   constructor(public firstName: string, public lastName: string) {}

//   get fullName(): string {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }
// const person = new Person('firstname', 'lastname');
//don't envoke with (), think just "getting" the information without changing
// console.log(person.fullName);
