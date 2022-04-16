facebookUser = {
  name: "Isaac Ortíz",
  photo: "cat",
  birthday: "25-03-98",
  city: "México",
  school: "UCI",
  originCity: "Cuautitlán",
  job: "Systems engineer",
  gender: "male",
  getUser: function () {
      return `${this.name} has a picture of a ${this.photo}, his birthday is on ${this.birthday} and lives in ${this.city}`
  },
};

console.log(facebookUser.getUser())