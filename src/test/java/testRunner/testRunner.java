package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;

import cucumber.api.junit.Cucumber;




@RunWith(Cucumber.class)

@CucumberOptions(
		
		features = "C:\\Users\\default.LAPTOP-NL7B5LGV\\eclipse-workspace\\MultiCart_Cucumber_BDD\\src\\test\\resources\\Features\\registerWithMaps.feature",
		glue = {"stepDefinitions"},
		
		format = {"pretty", "html:test-output"},
		
		dryRun = false,//check to see if all the step definititons ae thr
		
		monochrome = true // display the output in a readable format
		
		)

public class testRunner {

}
