import { User } from './models/User';

const user = new User({ name: 'Jay', age: 31 });
console.log(user);

console.log(user.get('name'));
console.log(user.get('age'));
