

describe('Sauce Demo automation test', () => {
    it('Success Login', async () => {
        await browser.url('https://www.saucedemo.com')

        const username = await browser.$('#user-name')
        const password = await browser.$('#password')
        const loginButton = await browser.$('#login-button')

        await username.setValue('standard_user')
        await password.setValue('secret_sauce')

        await loginButton.click()

        await browser.pause(1000)
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        await expect(browser).toHaveTitle('Swag Labs')

    })

    it('Success Add item to cart', async () => {

        const addCart = await browser.$('#add-to-cart-sauce-labs-backpack')
        const cartButton = await browser.$('#shopping_cart_container')
        const itemBackPack = await browser.$('#item_4_title_link')

        await addCart.click()

        await browser.pause(1000)

        await cartButton.click()

        await browser.pause(1000)
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
        await expect(itemBackPack).toHaveText('Sauce Labs Backpack')

    })

})