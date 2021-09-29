import { User } from './models/User';

const user = new User({ name: 'Jay', age: 31 });

user.on('change', () => {
  console.log('Change Event');
});
user.on('mouse', () => {
  console.log('Mouse Event');
});

user.trigger('change');
user.trigger('mouse');
user.trigger('nothing');
