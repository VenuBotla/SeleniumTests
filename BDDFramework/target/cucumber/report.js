$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("featureFiles/Homepage.feature");
formatter.feature({
  "name": "Verify home page",
  "description": "   As a user\n   I should be able to navigate through homepage\n   So that I can see what\u0027s on offer",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on Amazon homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "HomepageStepDefinitions.i_am_Amazon_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Selenium Explicit wait statement",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@skip"
    }
  ]
});
formatter.step({
  "name": "I wait for search field to be present",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "passed"
});
});