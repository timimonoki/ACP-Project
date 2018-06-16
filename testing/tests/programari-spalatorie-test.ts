import {BaseMethods} from "./utils/base-methods";
import {LoginConstants} from "./utils/constants/login-constants";
import {MainPage} from "../page-objects/main-page";

describe("Main action tests - ", function () {
    let mainPage;

    beforeEach(function () {
        browser.windowHandleMaximize();
        mainPage = new MainPage();
    });

    it("verify if clicking on -Programari Spalatorie- the right timetable opens", function () {
        BaseMethods.login(LoginConstants.EXISTENT_EMAIL, LoginConstants.EXISTENT_PASSWORD);
        mainPage.getUserGeneralDetailsSection.waitForVisible(5000);

        mainPage.getProgramariSpalatorieLink.click();
        mainPage.getWashingMachineHeader.waitForVisible(5000);
        var currentUrl = browser.getUrl();
        expect(currentUrl).toContain(LoginConstants.WASHINGMACHINE_URL_PART);
        expect(mainPage.getDateOnTimetable.isVisible()).toBe(true, "Data nu este afisata");
        expect(mainPage.getTimetable.isVisible()).toBe(true, "Tabela pe sapatamana curenta nu este afisata");
    });
});