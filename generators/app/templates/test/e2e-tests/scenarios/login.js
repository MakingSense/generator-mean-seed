'use strict';

describe('Login', function () {

  it('should show the login page', function () {
    browser.get("/");

    var currentUrl = browser.getCurrentUrl();
    expect(currentUrl).toEqual('http://localhost:9000/#/login');

    var loginForm = element(by.css('.login form'));
    expect(loginForm.isPresent()).toBeTruthy();
  });

  it('should require both login fields to be filled in', function () {
    var submit = element(by.css('.login button'));
    var errors = element.all(by.css('.error'));

    browser.get("/#/login");

    var visibleErrors = errors.filter(function (elem) {
      return elem.isDisplayed();
    });
    expect(visibleErrors.count()).toEqual(0);

    submit.click();

    visibleErrors = errors.filter(function (elem) {
      return elem.isDisplayed();
    });
    expect(visibleErrors.count()).toEqual(2);

    visibleErrors.each(function (elem) {
      expect(elem.getText()).toEqual('Field required');
    });
  });

  it('should notify that the email is not registered', function () {
    var submit = element(by.css('.login button'));
    var errors = element.all(by.css('.error'));

    browser.get("/#/login");

    element(by.model('user.email')).sendKeys('e2e_test@domain.com');
    element(by.model('user.password')).sendKeys('123');

    submit.click();

    var visibleErrors = errors.filter(function (elem) {
      return elem.isDisplayed();
    });
    expect(visibleErrors.count()).toEqual(1);

    visibleErrors.each(function (elem) {
      expect(elem.getText()).toEqual('Authentication failed. User not found.');
    });
  });

});
