package com.cucumberFramework.stepdefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import com.cucumberFramework.testBase.TestBase;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class LoginstepDefinition extends TestBase {

	
	

	/*@Given("^User is already on first page$")
	public void user_is_allready_on_first_page() throws InterruptedException {
		
		//driver = new ChromeDriver();
		//driver.get("https://www.ultimateqa.com/automation/");
		driver.get(arg1);
		driver.manage().timeouts().implicitlyWait(60,TimeUnit.SECONDS);
		System.out.println(" User is on the First page");
	}

	@When("^User is on Automation Practice page$")
	public void user_is_on_Automation_Practice_page() {
		String s1 = driver.getTitle();
		System.out.println(" Title of the page" + s1);

		if (s1.equalsIgnoreCase("Automation Practice | Ultimate QA"))
			System.out.println("  Verified Title of the first page");
		else
			System.out.println(" User is on wrong page");
		

	}

	@Then("^User clicks fill the form link$")
	public void User_clicks_fill_the_form_link() {
		String findFormLink = "div[class='et_pb_text_inner'] ul li:nth-child(4) a";
		WebElement ele =driver.findElement(By.cssSelector(findFormLink));
		ele.click();
		System.out.println(" Clicked on form link");
		
	}
	
	@Then("^Close the browser$")
	public void Close_the_browser() {
		
		//driver.close();
	    
	}
	
	@Given("^User is on the CRM first page$")
	public void User_is_on_the_CRM_first_page() {
		driver = new ChromeDriver();
		driver.get("https://classic.crmpro.com/index.html");
		driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
		System.out.println(" User is on the First page of CRM");
	    
	}

	@When("^User enters the \"([^\"]*)\" and \"([^\"]*)\" and login$")
	public void User_enters_the_and_and_login(String userid, String pwd) throws InterruptedException {
		
	driver.findElement(By.cssSelector("input[placeholder='Username'][name='username']")).sendKeys(userid);
	driver.findElement(By.cssSelector("input[placeholder='Password'][name='password']")).sendKeys(pwd);
	System.out.println(" User entered the user id and Password");
	WebElement ele=driver.findElement(By.cssSelector("input[value='Login']"));
	Thread.sleep(60);
	JavascriptExecutor js=(JavascriptExecutor)driver;
	js.executeScript("arguments[0].click();", ele);
	
	Thread.sleep(60);
	
	
	}

	@When("^User is on home page$")
	public void User_is_on_home_page() throws InterruptedException  {
		Thread.sleep(60);	
		
	WebElement txtHome=driver.findElement(By.cssSelector("a[title='Contacts']"));
	String s=txtHome.getText();
	if(s.equalsIgnoreCase("Contacts"));
	{
		System.out.println(" Home page verified");
		
	}
	   
	}

	@Then("^User clciks on contacts link$")
	public void User_clciks_on_contacts_link()  {
		WebElement txtcontact=driver.findElement(By.cssSelector("a[title='Contacts']"));
		Actions ac=new Actions(driver);
		ac.moveToElement(txtcontact).click();
		
	   
	   
	}
*/
	
	@Given("^User is on the CRM first page \"([^\"]*)\"$")
	public void user_is_on_the_CRM_first_page(String arg1) throws Throwable {
		
		driver.get(arg1);
		driver.manage().timeouts().implicitlyWait(60,TimeUnit.SECONDS);
		System.out.println(" User is on the First page");
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@When("^User enters the \"([^\"]*)\" and \"([^\"]*)\" and login$")
	public void user_enters_the_and_and_login(String userid, String pwd) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.cssSelector("input[placeholder='Username'][name='username']")).sendKeys(userid);
		driver.findElement(By.cssSelector("input[placeholder='Password'][name='password']")).sendKeys(pwd);
		System.out.println(" User entered the user id and Password");
		WebElement ele=driver.findElement(By.cssSelector("input[value='Login']"));
		Thread.sleep(60);
		JavascriptExecutor js=(JavascriptExecutor)driver;
		js.executeScript("arguments[0].click();", ele);
		
		Thread.sleep(60);
		
		
	   
	}

	@When("^User is on home page$")
	public void user_is_on_home_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Thread.sleep(60);	
		
		WebElement txtHome=driver.findElement(By.cssSelector("a[title='Contacts']"));
		String s=txtHome.getText();
		if(s.equalsIgnoreCase("Contacts"));
		{
			System.out.println(" Home page verified");
			
		}
	   
	}

	@Then("^User clciks on contacts link$")
	public void user_clciks_on_contacts_link() throws Throwable {
		WebElement txtcontact=driver.findElement(By.cssSelector("a[title='Contacts']"));
		Actions ac=new Actions(driver);
		ac.moveToElement(txtcontact).click();
		
	  
	}

	@Then("^Close the browser$")
	public void close_the_browser() throws Throwable {
	    
	}



}
