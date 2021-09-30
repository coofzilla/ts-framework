import { User } from './models/User';

const user = new User({ id: 1, name: 'Tob', age: 30 });

user.on('save', () => {
  console.log(user);
});

user.save();

//reminder on 'this'
//this refers to left of function call

// const colors = {
//   color: 'red',
//   printcolor() {
//     console.log(this.color);
//   },
// };

// colors.printcolor();
