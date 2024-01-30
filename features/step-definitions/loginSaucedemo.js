import {Given, When, Then} from '@wdio/cucumber-framework'


Given(/^I'm on the login page$/, async() => {
	await browser.url('https://www.saucedemo.com/')
});


When(/^I enter my (.*) and (.*)$/, async(username,password) => {
	await $('#user-name').setValue(username)
    await $('#password').setValue(password)
});



When(/^I click login button$/, async() => {
    await $('#login-button').click()
});


Then(/^I should the a error (.*)$/, async(message) => {
    const error_message = await $('h3[data-test="error"]')
    expect(error_message).toHaveText(message) 
});

/**
 * Second scenario
 */


When(/^I have entered my correct credentials$/, async() => {
	await $('#user-name').setValue('standard_user')
    await $('#password').setValue('secret_sauce')
});


Then(/^I should be navigated to products page$/, async() => {
    const error_message = await $('.title')
	expect(error_message).toHaveText('Products')
    //expect((await $('.title').toHaveText('Products'))
});
