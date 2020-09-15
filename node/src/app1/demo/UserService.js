class UserService {
    login(username, password) {
        console.log("enter UserService login method");
        console.log("info form UserService.login:" + username + " " + password);

        return true;
    }
}

module.exports = new UserService();