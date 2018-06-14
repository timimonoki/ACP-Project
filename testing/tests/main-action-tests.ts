import {BaseMethods} from "./utils/base-methods";
import {LoginConstants} from "./utils/constants/login-constants";
import {MainPage} from "../page-objects/main-page";

describe("Main action tests - ", function () {
    let baseMethods;
    let mainPage;

    beforeEach(function () {
        baseMethods = new BaseMethods();
        mainPage = new MainPage();
        baseMethods.login(LoginConstants.EXISTENT_EMAIL, LoginConstants.EXISTENT_PASSWORD);
    });

    it("verify if the correct page elements appear after login with a correct account", function () {
        mainPage.getUserGeneralDetailsSection.waitForVisible(5000);

        expect(mainPage.getUserGeneralDetailsSection.isVisible).toBeTruthy("Sectiunea -Despre Mine- nu este afisata");
        expect(mainPage.getVerifyStudentSection.isVisible).toBeFalsy("Sectiunea -Verificare Student- inca este afisata");
        expect(mainPage.getStudentDataSection).toBeTruthy("Sectiunea -Date Student- nu este afisata");
        expect(mainPage.getVerifyEmployeeSection.isVisible).toBeTruthy("Sectiunea -VerificareAngajat- nu este afisata");

        expect(mainPage.getCaminNumber.getText).toEqual(LoginConstants.CAMIN_NUMBER, "Numarul caminului este incorect");
        expect(mainPage.getCameraNumber.getText).toEqual(LoginConstants.CAMERA_NUMBER, "Numarul camerei este incorecta");
        expect(mainPage.getNumeElement.getText).toEqual(LoginConstants.NUME, "Numele nu este corect");



        expect(mainPage.getAccountGeneralDetailsSection.isVisible).toBeTruthy("Sectiunea informatii cont nu este afisata");
        expect(mainPage.getEditAccountButton.isVisible).toBeTruthy("Edit Account button nu este afisat");
        expect(mainPage.getDeleteAccount.isVisible).toBeTruthy("Delete Account button nu este afisat");
    });
});