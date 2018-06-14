import {LoginPage} from "../../testing/page-objects/login-page";
import {LoginConstants} from "../tests/utils/constants/login-constants";
import {MainPage} from "../../testing/page-objects/main-page";
import {BaseMethods} from "../tests/utils/base-methods";

describe('Login Page - ', function () {
    let loginPage;
    let mainPage;
    let baseMethods;

    beforeEach(function () {
        browser.windowHandleMaximize();
        loginPage = new LoginPage();
        mainPage = new MainPage();
        baseMethods = new BaseMethods();
    });

    it('test that login page opens at first access', function() {
        loginPage.goToHomepage();
        loginPage.getLoginForm.waitForVisible(5000);
        expect(loginPage.getLoginForm.isVisible).toBeTruthy("Form-ul de login nu este vizibil");
        expect(loginPage.getLoginButton.isVisible).toBeTruthy("Butonul de Login nu este afisat");
    });


    it('test login with inexistent(automatically generated, not validated) account', function() {
        baseMethods.login(LoginConstants.EXISTENT_EMAIL, LoginConstants.INEXISTENT_EMAIL_PASSWORD);
        mainPage.getUserGeneralDetailsSection.waitForVisible(5000);

        expect(mainPage.getUserGeneralDetailsSection.isVisible).toBeTruthy("Sectiunea -Despre Mine- nu este afisata");
        expect(mainPage.getVerifyStudentSection.isVisible).toBeTruthy("Sectiunea -Verificare Student- nu este afisata");
        expect(mainPage.getVerifyStudentCNPSection.isVisible).toBeTruthy("Sectiunea de introducere CNP nu este afisata");
        expect(mainPage.getVerifyEmployeeSection.isVisible).toBeTruthy("Sectiunea -VerificareAngajat- nu este afisata");
        expect(mainPage.getAccountGeneralDetailsSection.isVisible).toBeTruthy("Sectiunea informatii cont nu este afisata");
        expect(mainPage.getEditAccountButton.isVisible).toBeTruthy("Edit Account button nu este afisat");
        expect(mainPage.getDeleteAccount.isVisible).toBeTruthy("Delete Account button nu este afisat");
    });

    it('test login with an incorrect user and password', function() {
        baseMethods.login(LoginConstants.INCORREXT_EMAIL, LoginConstants.INCORRECT_EMAIL_PASSWORD);
        expect(loginPage.getErrorMessageAlert.isVisible).toBeTruthy("Mesajul de eroare nu a aparut");
    });
});