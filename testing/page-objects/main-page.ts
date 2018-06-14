export class MainPage {

    get getMainHeader() { return browser.element(".main-header"); }
    get getLogo() { return browser.element(".logo-lg"); }
    get getLeftSidebarToggle() { return browser.element(".sidebar-toggle"); }
    get getAccountMenu() { return browser.element(".dropdown.user.user-menu.userBox"); }
    get getSignOutButton() { return browser.element(".dropdown.user.user-menu.userBox .pull-right"); }
    get getRightSidebarToggle() { return browser.element(".toggle-sidebar-right"); }
    get getUserGeneralDetailsSection() { return browser.element("app-profile app-user-details .col-md-9"); }
    get getAccountGeneralDetailsSection() { return browser.element("app-profile app-user-social-details .col-md-3"); }
    get getUserPicture() { return browser.element("app-profile app-user-social-details img"); }
    get getProfileUsername() { return browser.element("app-profile app-user-social-details .profile-username"); }
    get getProfileSubUsername() { return browser.element('app-profile app-user-social-details p'); }
    get getAccountEmail() { return browser.element('app-profile app-user-social-details .list-group .list-group-item:nth-child(1) a'); }
    get getEditAccountButton() { return browser.element(".box-profile a.btn[href='/auth/realms/studentLounge/account?referrer=sl-web-ui-client']"); }
    get getDeleteAccount() { return browser.element("a=Delete Account"); }

    get getVerifyStudentSection() { return browser.element("app-profile app-add-student .col-md-6"); }
    get getVerifiStudentSectionSelector() { return "app-profile app-add-student .col-md-6"; }
    get getVerifyStudentCNPSection() { return browser.element("app-profile app-add-student .form-group"); }
    get getVerifyStudentVerifyButton() { return browser.element("app-profile app-add-student .btn.btn-primary"); }
    get getVerifyEmployeeSection() { return browser.element("app-profile app-add-employee .col-md-6"); }
    get getStudentDataSection() { return browser.element("app-profile app-student-details .col-md-6"); }

    get getCaminNumber() { return browser.element("app-student-details .box-body p:nth-child(5)"); }
    get getCameraNumber() { return browser.element("app-student-details .box-body p:nth-child(8)"); }
    get getNumeElement() { return browser.element("app-student-details .box-body p:nth-child(11)"); }

    get getProgramariSpalatorieLink() { return browser.element("app-menu-aside .sidebar-menu li:nth-child(2) a"); }
    get getReparatiiLink() { return browser.element("app-menu-aside .sidebar-menu li:nth-child(3) a"); }
    get getWashingMachineHeader() { return browser.element(".content-header h1"); }
    get getReparationsHeader() { return browser.element(".content-header h1"); }
    get getDateOnTimetable() { return browser.element(".fc-toolbar.fc-header-toolbar .fc-left"); }
    get getTimetable() { return browser.element(".fc-view.fc-agendaWeek-view.fc-agenda-view"); }
}