import {BaseMethods} from "./utils/base-methods";
import {LoginConstants} from "./utils/constants/login-constants";
import {MainPage} from "../page-objects/main-page";

describe("Main action tests - ", function () {
    let mainPage;

    beforeEach(function () {
        browser.windowHandleMaximize();
        mainPage = new MainPage();

    });

    it("verify if the correct page elements appear after login with a correct account", function () {
        BaseMethods.login(LoginConstants.EXISTENT_EMAIL, LoginConstants.EXISTENT_PASSWORD);
        mainPage.getUserGeneralDetailsSection.waitForVisible(5000);

        expect(mainPage.getUserGeneralDetailsSection.isVisible()).toBe(true,"Sectiunea -Despre Mine- nu este afisata");
        expect(browser.isExisting(mainPage.getVerifiStudentSectionSelector)).toBeFalsy("Sectiunea -Verificare Student- inca este vizibila");
        expect(mainPage.getStudentDataSection.isVisible()).toBe(true, "Sectiunea -Date Student- nu este afisata");
        expect(mainPage.getVerifyEmployeeSection.isVisible()).toBe(true,"Sectiunea -Verificare Angajat- nu este afisata");

        // expect(mainPage.getCaminNumber.getText()).toEqual(LoginConstants.CAMIN_NUMBER, "Numarul caminului este incorect");
        expect(mainPage.getCameraNumber.getText()).toEqual(LoginConstants.CAMERA_NUMBER, "Numarul camerei este incorecta");
        expect(mainPage.getNumeElement.getText()).toEqual(LoginConstants.NUME, "Numele nu este corect");
        expect(mainPage.getProgramariSpalatorieLink.isVisible()).toBe(true, "Link-ul -Programari Spalatorie- nu este afisat");
        expect(mainPage.getReparatiiLink.isVisible()).toBe(true, "Link-ul -Reparatii- nu este afisat");

        expect(mainPage.getAccountGeneralDetailsSection.isVisible()).toBe(true,"Sectiunea informatii cont nu este afisata");
        expect(mainPage.getEditAccountButton.isVisible()).toBe(true,"Edit Account button nu este afisat");
        expect(mainPage.getDeleteAccount.isVisible()).toBe(true,"Delete Account button nu este afisat");
    });

    it("verify if clicking on -Programari Spalatorie- the right timetable opens", function () {
        // mainPage.getUserGeneralDetailsSection.waitForVisible(5000);
        mainPage.getProgramariSpalatorieLink.click();
        mainPage.getWashingMachineHeader.waitForVisible(5000);
        var currentUrl = browser.getUrl();
        expect(currentUrl).toContain(LoginConstants.WASHINGMACHINE_URL_PART);
        expect(mainPage.getDateOnTimetable.isVisible()).toBe(true, "Data nu este afisata");
        expect(mainPage.getTimetable.isVisible()).toBe(true, "Tabela pe sapatamana curenta nu este afisata");
    });

    it("verify if clicking  on -Reparatii- the correct page opens", function () {
        // mainPage.getUserGeneralDetailsSection.waitForVisible(5000);
        mainPage.getReparatiiLink.click();
        mainPage.getReparationsHeader.waitForVisible(5000);
        var currentUrl = browser.getUrl();
        expect(currentUrl).toContain(LoginConstants.REPARATIONS_URL_PART);
    });
});