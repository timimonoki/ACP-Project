export class LoginPage {

    get getLoginForm() { return browser.element("#kc-form-login"); }
    get getUsername() { return browser.element("#username"); }
    get getPassword() { return browser.element("#password"); }
    get getLoginButton() { return browser.element('#kc-login'); }
    get getRememberMeButton() {return browser.element("#rememberMe"); }
    get getRegisterButton() { return browser.element("#kc-registration span a"); }
    get getForgotPasswordButton() { return browser.element("a=Forgot Password?"); }

    goToHomepage() {
        browser.url('/');
    }
}