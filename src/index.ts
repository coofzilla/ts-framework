import { User } from './models/User';

const user = new User({ name: 'third record', age: 0 });

user.events.on('change', () => {
  console.log('change');
});

user.events.trigger('change');
