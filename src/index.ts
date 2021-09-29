import { User } from './models/User';

const user = new User({ name: 'third record', age: 0 });

//accessors "getter"
class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
const person = new Person('firstname', 'lastname');
//don't envoke with (), think just "getting" the information without changing
console.log(person.fullName);
