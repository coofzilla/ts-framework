import { User } from './models/User';

const user = new User({ name: 'third record', age: 0 });

console.log(user.get('name'));

user.on('change', () => {
  console.log('User was changed');
});

user.trigger('change');

//reminder on 'this'
//this refers to left of function call

// const colors = {
//   color: 'red',
//   printcolor() {
//     console.log(this.color);
//   },
// };

// colors.printcolor();
