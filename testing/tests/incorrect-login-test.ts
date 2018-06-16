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

    it('test that login page opens at first access', function() {
        loginPage.goToHomepage();
        loginPage.getLoginForm.waitForVisible(5000);
        expect(loginPage.getLoginForm.isVisible).toBeTruthy("Form-ul de login nu este vizibil");
        expect(loginPage.getLoginButton.isVisible).toBeTruthy("Butonul de Login nu este afisat");
    });

    it('test login with an incorrect user and password', function() {
        BaseMethods.login(LoginConstants.INCORREXT_EMAIL, LoginConstants.INCORRECT_EMAIL_PASSWORD);
        expect(loginPage.getErrorMessageAlert.isVisible).toBeTruthy("Mesajul de eroare nu a aparut");
    });
});