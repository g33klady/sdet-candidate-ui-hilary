const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CartPage extends Page {
    /**
     * define selectors using getter methods
     */

    get cartListItems()
    {
        return $$('.cart_list .cart_item')
    }

    async getCartItemQty(cartItem)
    {
        return $(`${cartItem} .cart_quantity`)
    }

    async getCartItemName(cartItem)
    {
        return $(`${cartItem} .inventory_item_name`)
    }

    async getCartItemDesc(cartItem)
    {
        return $(`${cartItem} .inventory_item_desc`)
    }

    async getCartItemPrice(cartItem)
    {
        return $(`${cartItem} .inventory_item_price`)
    }

    async getCartItemRemoveButton(cartItem)
    {
        return $(`${cartItem} button=Remove`)
    }

    get continueShoppingButton()
    {
        return $('continue-shopping')
    }

    get checkoutButton()
    {
        return $('checkout')
    }  

    async getCartTotalQuantity()
    {
        return this.cartListItems.length;
    }

    async continueCheckoutProcess()
    {
        this.checkoutButton.click();
    }

    async waitForCheckoutButton()
    {
        this.checkoutButton.waitForClickable();
    }

    open() {
        return super.open('cart.html');
    }
}

module.exports = new CartPage();
