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
        BaseMethods.login(LoginConstants.EXISTENT_EMAIL, LoginConstants.EXISTENT_PASSWORD);
        mainPage.getUserGeneralDetailsSection.waitForVisible(5000);

        expect(mainPage.getUserGeneralDetailsSection.isVisible).toBeTruthy("Sectiunea -Despre Mine- nu este afisata");
        expect(mainPage.getVerifyStudentSection.isVisible).toBeTruthy("Sectiunea -Verificare Student- nu este afisata");
        expect(mainPage.getVerifyStudentCNPSection.isVisible).toBeTruthy("Sectiunea de introducere CNP nu este afisata");
        expect(mainPage.getVerifyEmployeeSection.isVisible).toBeTruthy("Sectiunea -VerificareAngajat- nu este afisata");
        expect(mainPage.getAccountGeneralDetailsSection.isVisible).toBeTruthy("Sectiunea informatii cont nu este afisata");
        expect(mainPage.getEditAccountButton.isVisible).toBeTruthy("Edit Account button nu este afisat");
        expect(mainPage.getDeleteAccount.isVisible).toBeTruthy("Delete Account button nu este afisat");
    });
});