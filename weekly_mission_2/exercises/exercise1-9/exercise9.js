uberProfile = {
  photo: "picture.png",
  name: "Rodrigo",
  lastname: "Avendaño",
  number: "55 3357 1627",
  email: "rodrigo.av.or@gmail.com",
  getName : function () {
      return `${this.name} ${this.lastname}`
  },
  getUser: function () {
      return `${this.photo}\n${this.getName()}\nNumber: ${this.number}\nEmail: ${this.email}`
  },
};

console.log(uberProfile.getName())
console.log(uberProfile.getUser())