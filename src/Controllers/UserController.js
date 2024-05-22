/** @format */
const UserModel = require('../Models/UserModel.js')

class UserController {

  #user = []

  register(email, password, username) {
    const user = new UserModel(email, password, username);
    this.#user.push(user);
    return { email: user.email, password: user.password, username: user.username };
  }
}

module.exports = UserController