import { User } from '../models/User';
import faker from 'faker';

export default class UserSeeder {
  static async create(params = {}, qty = 1) {
    let users = [];
    for (let i = 0; i < qty; i++) {
      let user = await User.create({
        email: params.hasOwnProperty('email')
          ? params.email
          : faker.internet.email(),
        password: params.hasOwnProperty('password') ? params.password : '111',
        role: params.hasOwnProperty('role') ? params.role : '111'
      });
      users.push(user);
    }
    return users;
  }
}
