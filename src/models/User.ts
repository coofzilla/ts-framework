import { Model } from './Model';

//interface can be used to create types to describe object literals
export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps> {
  
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
