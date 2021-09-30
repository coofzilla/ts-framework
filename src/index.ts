import { User } from './models/User';

const user = User.buildUser({ id: 1 });

user.on('change', () => {
  console.log(user);
});

user.fetch();
//reminder on 'this'
//this refers to left of function call

// const colors = {
//   color: 'red',
//   printcolor() {
//     console.log(this.color);
//   },
// };

// colors.printcolor();
