import {Given, When, Then} from '@wdio/cucumber-framework'



Given(/^I have logged-in to saucedemo and products are displayed$/, async() => {
	await browser.url('https://www.saucedemo.com')
    await $('#user-name').setValue('standard_user')
    await $('#password').setValue('secret_sauce')
    await $('#login-button').click()
    await expect(browser).toHaveUrlContaining('inventory')
});

When(/^I choose a products$/, async() => {
	$('#item_4_img_link').click()
    await expect(browser).toHaveUrlContaining('inventory-item')
});

When(/^click add to cart$/, async() => {
	$('#add-to-cart-sauce-labs-backpack').click();
    const badge = await $('shopping_cart_badge')
    expect(badge).toBeDisplayed
});

When(/^I click on the cart icon$/, async() => {
    $('.shopping_cart_link').click()
    await expect(browser).toHaveUrlContaining('cart')

});

When(/^I click checkout$/, async() => {
	$('#checkout').click()
    await expect(browser).toHaveUrlContaining('checkout-step-one')
});


When(/^I enter my user details$/, async() => {
	await $('#first-name').setValue('Lux')
    await $('#last-name').setValue('Dyo')
    await $('#postal-code').setValue('7784')
    
});

When(/^I click continue button$/, async() => {
	$('#continue').click()
});

When(/^I should see checkout summary displayed$/, async() => {
	await expect(browser).toHaveUrlContaining('checkout-step-two')
    const summary = await $('.summary_info_label')
    expect(summary).toBeDisplayed
});

When(/^I click finish button$/, async() => {
	$('#finish').click()
});

Then(/^I should see text Checkout:Complete and text Thank you for your order$/, async() => {
	await expect(browser).toHaveUrlContaining('checkout-step-two')
    const element = await $('.complete-header')
    expect(element).toBeDisplayed
    //expect((await $('.complete-header')).isDisplayed).toBe(true)
});
