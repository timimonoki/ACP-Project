import {LoginPage} from "../../testing/page-objects/login-page";

describe('Login Page - ', function () {
    let loginPage;

    beforeEach(function () {
        loginPage = new LoginPage();
    });

    // it('test that login page opens at first access', function() {
    //     loginPage.goToHomepage();
    //     loginPage.getLoginForm().waitForVisible(3000);
    //     expect(loginPage.getLoginForm.isVisible);
    //     expect(loginPage.getLoginButton.isVisible);
    // });


    it('test login with invalid account', function() {
        loginPage.goToHomepage();
        loginPage.getLoginForm.waitForVisible(5000);
        browser.pause(5000);

        // browser.setValue("//*[@id=\"username\"]", "Ceva ceva");
        // loginPage.setUsernameInput();
        loginPage.getPassword.setValue("Ceva ceva");
        browser.pause(5000);

    });
});