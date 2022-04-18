const spiderman = require("../app/Spiderman");

describe("Unit Test for Spider-man class", () => {
  test("(1) Create an spider-,an object)", () => {
    const andrewGarfield = new spiderman('Amazing Spider-man',31,'Andrew Garfield',2,'Sony')

    expect(andrewGarfield.name).toBe('Amazing Spider-man');
    expect(andrewGarfield.age).toBe(31);
    expect(andrewGarfield.actor).toBe('Andrew Garfield');
    expect(andrewGarfield.movieNumbers).toBe(2);
    expect(andrewGarfield.studio).toBe('Sony');

    const tomHolland = new spiderman('Spiderman: Homecoming',25,'Tom Holland',5,'Marvel')

    expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studios")
    
  });
});
