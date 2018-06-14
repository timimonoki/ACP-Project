import {LoginPage} from "../../../testing/page-objects/login-page";

export class BaseMethods {

    static login(username: string, password: string) : void {
        var loginPage = new LoginPage();
        loginPage.goToHomepage();
        loginPage.getLoginForm.waitForVisible(5000);
        loginPage.getUsername.setValue(username);
        loginPage.getPassword.setValue(password);
        loginPage.getLoginButton.click();
    }
}