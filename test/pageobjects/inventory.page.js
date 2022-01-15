const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class InventoryPage extends Page {
    /**
     * define selectors using getter methods
     */

    async getAddToCartButtonForItem(item) //this one isn't working, no time to debug!
    {
        return $(`//button[contains(id, add-to-cart-sauce-labs-${item})]`)
    }

    get addToCartButtonForBackpack()
    {
        return $('#add-to-cart-sauce-labs-backpack');
    }
    async getImageLinkForItem(itemId)
    {
        return $(`#item_${itemId}_img_link`)
    }

    async getTitleLinkForItem(itemId)
    {
        return $(`#item_${itemId}_title_link`)
    }

    async addItemToCart(item)
    {
        this.getAddToCartButtonForItem(item).click(); //this isn't working :(
    }

    async addBackpackToCart()
    {
        this.addToCartButtonForBackpack.click();
    }

    open() {
        return super.open('inventory.html');
    }
}

module.exports = new InventoryPage();
