const User = require("./../models/User");

class UserService {
  static create(id, username, name) {
    return new User(id, username, name, "My bio");
  }

  static getInfo(user) {
    let list = [];
    Object.keys(user).map((key) => {
      list.push(user[key]);
    });
    return list;
  }

  // static updateUsername(user,newUserName){

  // }

  static getAllUsernames(names) {
    // let array = []
    // names.forEach(element => {
    //   array.push(element.username);
    // });
    // return array

    const array = names.map((element) => {
      return element.username;
    });
    return array;
  }
}

module.exports = UserService;
