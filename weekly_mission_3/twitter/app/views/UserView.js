const UserService = require("./../services/UserService");

class UserView {
  static createUser(payload) {
    if (payload === null) {
      console.log("Error es null");
      return { error: "El payload no existe" };
    } else if (
      typeof payload.username === "string" &&
      payload.name === "string" &&
      payload.id === "number"
    ) {
      return UserService.create(payload.id, payload.username, payload.name);
    } else {
      return { error: "Los datos necesitan tener un valor válido" };
    }
  }
}

module.exports = UserView;
