/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open(path) {
        return browser.url(`https://www.saucedemo.com/${path}`)
    }

    get secondaryTitle() {
        return $('.title')
    }

    get shoppingCartLink() {
        return $('.shopping_cart_link')
    }

    async setLoginCookie(){
        browser.addCookie( { 'session-username': 'standard_user'})
    }

    async setCartContents(itemIds)
    {
        await browser.executeScript("localStorage.setItem(arguments[0], arguments[1])", ['cart-contents', itemIds]);
    }

    async getCartContentsLength()
    {
        let cart = await browser.executeScript("localStorage.getItem('cart-contents')");
        console.log('******************************************');
        console.log(cart)
        return cart.length //should be an array
    }
}
