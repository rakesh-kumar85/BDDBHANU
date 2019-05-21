$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature/Contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Check Contacts",
  "description": "",
  "id": "check-contacts",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#Scenario: Data entry for conatcts"
    },
    {
      "line": 4,
      "value": "#Given User is on the CRM first page"
    },
    {
      "line": 5,
      "value": "#When  User enters the \"naveenautomation\" and \"test@123\" and login"
    },
    {
      "line": 6,
      "value": "#When  User is on home page"
    },
    {
      "line": 7,
      "value": "#Then  User clciks on contacts link"
    },
    {
      "line": 8,
      "value": "#Then  Close the browser"
    }
  ],
  "line": 10,
  "name": "Data from local",
  "description": "",
  "id": "check-contacts;data-from-local",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "User is on the CRM first page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User enters the \"\u003cuserid\u003e\" and \"\u003cpassword\u003e\" and login",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User is on home page",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User clciks on contacts link",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "check-contacts;data-from-local;",
  "rows": [
    {
      "cells": [
        "userid",
        "password"
      ],
      "line": 18,
      "id": "check-contacts;data-from-local;;1"
    },
    {
      "cells": [
        "naveenautomation",
        "test@123"
      ],
      "line": 19,
      "id": "check-contacts;data-from-local;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "Data from local",
  "description": "",
  "id": "check-contacts;data-from-local;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "User is on the CRM first page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User enters the \"naveenautomation\" and \"test@123\" and login",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User is on home page",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User clciks on contacts link",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginstepDefinition.User_is_on_the_CRM_first_page()"
});
formatter.result({
  "duration": 10023101693,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "naveenautomation",
      "offset": 17
    },
    {
      "val": "test@123",
      "offset": 40
    }
  ],
  "location": "LoginstepDefinition.User_enters_the_and_and_login(String,String)"
});
formatter.result({
  "duration": 15661836250,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.User_is_on_home_page()"
});
formatter.result({
  "duration": 60120606361,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"a[title\u003d\u0027Contacts\u0027]\"}\n  (Session info: chrome\u003d72.0.3626.109)\n  (Driver info: chromedriver\u003d73.0.3683.20 (8e2b610813e167eee3619ac4ce6e42e3ec622017),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027LAPTOP-TUC6MDGI\u0027, ip: \u0027192.168.0.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:62472}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d73.0.3683.20 (8e2b610813e167eee3619ac4ce6e42e3ec622017), userDataDir\u003dC:\\Users\\rakesh\\AppData\\Local\\Temp\\scoped_dir16080_25504}, takesHeapSnapshot\u003dtrue, unhandledPromptBehavior\u003dignore, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d72.0.3626.109, browserConnectionEnabled\u003dfalse, proxy\u003dProxy(), nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 27a85e24c99bb3f2feb6086497aac7e7\n*** Element info: {Using\u003dcss selector, value\u003da[title\u003d\u0027Contacts\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:510)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat stepDefinition.LoginstepDefinition.User_is_on_home_page(LoginstepDefinition.java:94)\r\n\tat ✽.When User is on home page(Feature/Contacts.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginstepDefinition.User_clciks_on_contacts_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginstepDefinition.Close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});