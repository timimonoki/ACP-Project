import {LoginPage} from "../../testing/page-objects/login-page";
import {LoginConstants} from "../tests/utils/constants/login-constants";
import {MainPage} from "../../testing/page-objects/main-page";
import {BaseMethods} from "../tests/utils/base-methods";

describe('Login Page - ', function () {
    let loginPage;
    let mainPage;

    beforeEach(function () {
        browser.windowHandleMaximize();
        loginPage = new LoginPage();
        mainPage = new MainPage();
    });

    it("test logout from the app", function () {
        BaseMethods.login(LoginConstants.EXISTENT_EMAIL, LoginConstants.EXISTENT_PASSWORD);
        mainPage.getUserGeneralDetailsSection.waitForVisible(5000);
        mainPage.getAccountMenu.click();
        mainPage.getSignOutButton.click();
        loginPage.getLoginForm.waitForVisible(5000);
        expect(loginPage.getLoginForm.isVisible()).toBe(true, "Logout nu a fost cu succes");
    });
});