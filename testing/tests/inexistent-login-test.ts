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

    it('test login with inexistent(automatically generated, not validated) account', function() {
        BaseMethods.login(LoginConstants.INEXISTENT_EMAIL, LoginConstants.INEXISTENT_EMAIL_PASSWORD);
        mainPage.getUserGeneralDetailsSection.waitForVisible(5000);

        expect(mainPage.getUserGeneralDetailsSection.isVisible()).toBe(true,"Sectiunea -Despre Mine- nu este afisata");
        expect(mainPage.getVerifyStudentSection.isVisible()).toBe(true,"Sectiunea -Verificare Student- nu este afisata");
        expect(mainPage.getVerifyStudentCNPSection.isVisible()).toBe(true,"Sectiunea de introducere CNP nu este afisata");
        expect(mainPage.getVerifyEmployeeSection.isVisible()).toBe(true,"Sectiunea -VerificareAngajat- nu este afisata");
        expect(mainPage.getAccountGeneralDetailsSection.isVisible()).toBe(true,"Sectiunea informatii cont nu este afisata");
        expect(mainPage.getEditAccountButton.isVisible()).toBe(true,"Edit Account button nu este afisat");
        expect(mainPage.getDeleteAccount.isVisible()).toBe(true,"Delete Account button nu este afisat");
    });
});