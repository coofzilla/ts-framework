import { User } from './models/User';

const user = new User({ name: 'Jay', age: 31 });

user.set({ name: 'chris', age: 54 });

console.log(user.get('name'));
console.log(user.get('age'));
