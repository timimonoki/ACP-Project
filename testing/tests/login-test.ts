import {LoginPage} from "../../testing/page-objects/login-page";
import {LoginConstants} from "../tests/utils/constants/login-constants";
import {MainPage} from "../../testing/page-objects/main-page";

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
        loginPage.getLoginForm.waitForVisible(3000);
        expect(loginPage.getLoginForm.isVisible).toBeTruthy("Form-ul de login nu este vizibil");
        expect(loginPage.getLoginButton.isVisible).toBeTruthy("Butonul de Login nu este afisat");
    });


    it('test login with inexistent(automatically generated, not validated) account', function() {
        loginPage.goToHomepage();
        loginPage.getLoginForm.waitForVisible(3000);
        loginPage.getUsername.setValue(LoginConstants.INEXISTENT_EMAIL);
        loginPage.getPassword.setValue(LoginConstants.INEXISTENT_EMAIL_PASSWORD);
        loginPage.getLoginButton.click();

        mainPage.getUserGeneralDetailsSection.waitForVisible(3000);
        expect(mainPage.getUserGeneralDetailsSection.isVisible).toBeTruthy("Sectiunea -Despre Mine- nu este afisata");
        expect(mainPage.getVerifyStudentSection.isVisible).toBeTruthy("Sectiunea -Verificare Student- nu este afisata");
        expect(mainPage.getVerifyStudentCNPSection.isVisible).toBeTruthy("Sectiunea de introducere CNP nu este afisata");
        expect(mainPage.getVerifyEmployeeSection.isVisible).toBeTruthy("Sectiunea -VerificareAngajat- nu este afisata");
    });
});