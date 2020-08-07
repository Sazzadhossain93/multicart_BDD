$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/default.LAPTOP-NL7B5LGV/eclipse-workspace/MultiCart_Cucumber_BDD/src/test/resources/Features/register.feature");
formatter.feature({
  "line": 1,
  "name": "User registration feature",
  "description": "",
  "id": "user-registration-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User should be able to register",
  "description": "",
  "id": "user-registration-feature;user-should-be-able-to-register",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user opens the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user goes to the loginpage",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user goes to the registration form",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user enters \"\u003cEmail\u003e\" and \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\" and \"\u003cFirstname\u003e\" and \"\u003cLastname\u003e\" and \"\u003cAddress\u003e\" and submit the form",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "user-registration-feature;user-should-be-able-to-register;",
  "rows": [
    {
      "cells": [
        "Email",
        "Username",
        "Password",
        "Firstname",
        "Lastname",
        "Address"
      ],
      "line": 13,
      "id": "user-registration-feature;user-should-be-able-to-register;;1"
    },
    {
      "cells": [
        "sadman123@gmail.com",
        "Sam",
        "Sadmansiam12",
        "Sazzad",
        "Hossain",
        "123 weldon street"
      ],
      "line": 14,
      "id": "user-registration-feature;user-should-be-able-to-register;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "User should be able to register",
  "description": "",
  "id": "user-registration-feature;user-should-be-able-to-register;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user opens the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user goes to the loginpage",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user goes to the registration form",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user enters \"sadman123@gmail.com\" and \"Sam\" and \"Sadmansiam12\" and \"Sazzad\" and \"Hossain\" and \"123 weldon street\" and submit the form",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.user_opens_the_browser()"
});
formatter.result({
  "duration": 3919253100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_goes_to_the_loginpage()"
});
formatter.result({
  "duration": 1191814300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_goes_to_the_registration_form()"
});
formatter.result({
  "duration": 256690900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sadman123@gmail.com",
      "offset": 13
    },
    {
      "val": "Sam",
      "offset": 39
    },
    {
      "val": "Sadmansiam12",
      "offset": 49
    },
    {
      "val": "Sazzad",
      "offset": 68
    },
    {
      "val": "Hossain",
      "offset": 81
    },
    {
      "val": "123 weldon street",
      "offset": 95
    }
  ],
  "location": "StepDefinitions.user_enters_and_and_and_and_and_and_submit_the_form(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 77625100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027txtEmail\u0027]\"}\n  (Session info: chrome\u003d84.0.4147.105)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LAPTOP-2Q9UMQ9M\u0027, ip: \u0027192.168.1.16\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.7\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.105, chrome: {chromedriverVersion: 84.0.4147.30 (48b3e868b4cc0..., userDataDir: C:\\Users\\DEFAUL~1.LAP\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:52972}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 29e47751fa05374110bf36470908acf0\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027txtEmail\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat stepDefinitions.StepDefinitions.user_enters_and_and_and_and_and_and_submit_the_form(StepDefinitions.java:73)\r\n\tat ✽.And user enters \"sadman123@gmail.com\" and \"Sam\" and \"Sadmansiam12\" and \"Sazzad\" and \"Hossain\" and \"123 weldon street\" and submit the form(C:/Users/default.LAPTOP-NL7B5LGV/eclipse-workspace/MultiCart_Cucumber_BDD/src/test/resources/Features/register.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinitions.user_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});