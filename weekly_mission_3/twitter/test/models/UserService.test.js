const UserService = require("../../app/models/UserService");

describe("Test for UserService", () => {
  test("1.Create a new user using UserService", () => {
    const user = UserService.create(1, "carlogilmar", "Carlo");

    expect(user.username).toBe("carlogilmar");
    expect(user.name).toBe("Carlo");
    expect(user.id).toBe(1);
    expect(user.bio).not.toBeUndefined();
  })

  test("2. Get all user data in a list", () => {
    const user = UserService.create(1, "Carlogilmar", "Carlo");
    //console.log(user)
    const userInfoList = UserService.getInfo(user);
    //console.log(userInfoList)
    expect(userInfoList[0]).toBe(1);
    expect(userInfoList[1]).toBe("Carlogilmar");
    expect(userInfoList[2]).toBe("Carlo");
    expect(userInfoList[3]).toBe("My bio");
  })

//   test("3.Update username", () => {
//     const user = UserService.create(1, "Carlogilmar", "Carlo");
//     UserService.updateUsername(user, "carlog");
//     expect(user.username).toBe("carlog");
//   })

  test("4. Given a list of users give me the list of usernames", () => {
    const user1 = UserService.create(1, "Carlogilmar1", "Carlo");
    const user2 = UserService.create(1, "Carlogilmar2", "Carlo");
    const user3 = UserService.create(1, "Carlogilmar3", "Carlo");
    const usernames = UserService.getAllUsernames([user1, user2, user3]);
    expect(usernames).toContain("Carlogilmar1");
    expect(usernames).toContain("Carlogilmar2");
    expect(usernames).toContain("Carlogilmar3");
    // console.log(usernames)
  });
});
