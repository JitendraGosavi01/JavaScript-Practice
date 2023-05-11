class UserAuthenticator {
  authenticate(username, password) {
    console.log(username, password, "User authentication");
  }
}

class EmailSender {
  sendEmail(emailId) {
    console.log(emailId, "Sending email...");
  }
}
// Here with this User class we have written corresponding logic to their corresponding
// function so now user is not responsible for handling the business logic responsibility
class User {
  constructor(username, password, email) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.authenticator = new UserAuthenticator();
    this.emailSender = new EmailSender();
  }

  login() {
    return this.authenticator.authenticate(this.username, this.password);
  }

  sendEmail() {
    return this.emailSender.sendEmail(this.email);
  }
}

const user1 = new User("Jitendra", "something", "some@randomemail.com");
user1.login();
user1.sendEmail();
