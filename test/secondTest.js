const {
    Builder,
    By,
    Key
} = require("selenium-webdriver");

const assert = require("assert");
var should = require("chai").should();

//describe
describe("add another todo tests", function () {

    //it block
    it("successfully adds another a todo to application", async function () {

        async function example() {
            //launch the browser
            let driver = await new Builder().forBrowser("chrome").build();

            //navigate to our application
            await driver.get("https://lambdatest.github.io/sample-todo-app")

            //add to do
            await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium", Key.RETURN);

            //assert
            let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function (value) {
                return value;
            });

            //assert using node assertion 
            // assert.strictEqual(todoText, "Learn Selenium");

            //assert using chai should
            todoText.should.equal("Learn Selenium");


            //close the browser
            await driver.quit();
        }

        example();

    });

});