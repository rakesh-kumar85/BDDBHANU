package com.cucumberFramework.testRunner;

import org.junit.rules.TestName;
import org.junit.runner.RunWith;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.TestNGCucumberRunner;


//@RunWith(Cucumber.class)
@CucumberOptions(
		features="src/test/resources/Features",
		glue={"com/cucumberFramework/stepDefinition"},
		plugin={"pretty","html:target/cucumber-reports/cucumber-preety", "json:target/cucumber-reports/CucumberTestReports.json","rerun:target/cucumber-reports/rerun.text"})
		
public class TestRunner {
	
	private TestNGCucumberRunner testNGCucumberRunner;
	
	@BeforeClass(alwaysRun=true)
	public void setUpClass()
	{
		testNGCucumberRunner=new TestNGCucumberRunner(this.getClass());
		
	}
	
	@Test(groups="cucumber",description=" Runs cucumber features",dataProvider="features")
	public void feature(CucumberFeatureWrapper cucumberFeature)
	{
		testNGCucumberRunner.runCucumber(cucumberFeature.getCucumberFeature());
		
	}
	
	@DataProvider
	public Object[][] features()
	{
		return testNGCucumberRunner.provideFeatures();
	}
	@AfterClass(alwaysRun=true)
	public void tearDownClass()
	{
		testNGCucumberRunner.finish();
	}
	//

}
