package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import junit.framework.Assert;

public class StepDefinitions {

	WebDriver driver;
	
	@Given("^user opens the browser$")
	public void user_opens_the_browser()  {
	   
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
	}

	@When("^user goes to the loginpage$")
	public void user_goes_to_the_loginpage()  {
	    
	   driver.get("https://www.demo.iscripts.com/multicart/demo/index.php");
	   driver.findElement(By.xpath("//span[contains(text(),'Login')]")).click();
	}
	
	
	// \"(.*)\" - regular expression

	@When("^user puts \"(.*)\" and \"(.*)\"$")
	public void user_puts_id_and_password(String username, String password) {
	  
		
		driver.findElement(By.xpath("//input[@id='username']")).sendKeys(username);
		driver.findElement(By.xpath("//input[@id='password']")).sendKeys(password);
	}

	@Then("^user logs into the system$")
	public void user_logs_into_the_system()  {
	    
		driver.findElement(By.xpath("//button[@id='jqLogin']")).click();
	}
	
	@Then("^user sees title of the page is Wildfire Cart$")
	public void user_sees_title_of_the_page_is_Wildfire_Cart()  {
	   
		String title = driver.getTitle();
		
		System.out.println(title);
		
		String expectedTitle = "WildFire Cart";
		String ActualTitle = title;
		
		
		Assert.assertEquals(expectedTitle,ActualTitle);
	}
	
	@And("^user goes to the registration form$")
	public void user_goes_to_the_registration_form()  {
	    
	   driver.findElement(By.xpath("//button[@id='jqSignup']")).click();
	}
	

	@When("^user enters \"(.*)\" and \"(.*)\" and \"(.*)\" and \"(.*)\" and \"(.*)\" and \"(.*)\" and submit the form$")
	public void user_enters_and_and_and_and_and_and_submit_the_form(String Email, String Username, String Password, String Firstname, String Lastname, String Address)  {

		driver.findElement(By.xpath("//input[@id='txtEmail']")).sendKeys(Email);
		driver.findElement(By.xpath("//input[@id='txtUserName']")).sendKeys(Username);
		driver.findElement(By.xpath("//input[@id='txtPassword']")).sendKeys(Password);
		driver.findElement(By.xpath("//input[@id='txtCnfPassword']")).sendKeys(Password);
		driver.findElement(By.xpath("//input[@id='txtFirstName']")).sendKeys(Firstname);
		driver.findElement(By.xpath("//input[@id='txtLastName']")).sendKeys(Lastname);
		driver.findElement(By.xpath("//div[@class='field_wrapper_required field_wrapper formfield_row']//input[@class='form-control']")).sendKeys(Address);
		
		driver.findElement(By.xpath("//input[@class='login_btn']")).click();
	}

	
	
	
	
	
	
	@Then("^user close the browser$")
	public void user_close_the_browser() throws InterruptedException  {
	    
		Thread.sleep(3000);
		driver.close();
	}




}
