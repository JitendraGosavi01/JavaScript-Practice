// Here this User class handling all the logic for authenticating user
// as well as sending the emails
class User {
  constructor(username, password, email) {
    this.email = email;
    this.password = password;
    this.username = username;
  }

  authenticateUser() {
    return this.email === "some@example.com" && this.password === "password";
  }

  sendEmail() {
    return "emails sending";
  }
}

const user = new User("some@example.com", "password", "some@example.com");
console.log(user.authenticateUser());
console.log(user.sendEmail());
