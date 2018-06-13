export class LoginPage {

    private loginForm = browser.element("#kc-form-login");
    private username = browser.element("#username");
    private password = browser.element("#password");
    private loginButton = browser.element('#kc-login');
    private rememberMeButton = browser.element("#rememberMe");
    private registerButton = browser.element("#kc-registration span a");
    private forgotPasswordButton = browser.element("a=Forgot Password?");

    goToHomepage() {
        browser.url('/');
    }

    get getLoginForm() {
        return this.loginForm;
    }

    get getUsername() {
        return this.username;
    }

    get getPassword() {
        return this.password;
    }

    get getLoginButton() {
        return this.loginButton;
    }

    get getRememberMeButton() {
        return this.rememberMeButton;
    }

    get getRegisterButton() {
        return this.registerButton;
    }

    get getForgotPasswordButton() {
        return this.forgotPasswordButton;
    }

    set setUsernameInput(text) {
        this.username.setValue(text);
    }
}