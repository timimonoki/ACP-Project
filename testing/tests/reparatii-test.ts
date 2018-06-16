import {BaseMethods} from "./utils/base-methods";
import {LoginConstants} from "./utils/constants/login-constants";
import {MainPage} from "../page-objects/main-page";

describe("Main action tests - ", function () {
    let mainPage;

    beforeEach(function () {
        browser.windowHandleMaximize();
        mainPage = new MainPage();
    });

    it("verify if clicking  on -Reparatii- the correct page opens", function () {
        BaseMethods.login(LoginConstants.EXISTENT_EMAIL, LoginConstants.EXISTENT_PASSWORD);
        mainPage.getUserGeneralDetailsSection.waitForVisible(5000);

        mainPage.getReparatiiLink.click();
        mainPage.getReparationsHeader.waitForVisible(5000);
        var currentUrl = browser.getUrl();
        expect(currentUrl).toContain(LoginConstants.REPARATIONS_URL_PART);
    });
});