const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckoutStepTwoPage extends Page {
    /**
     * define selectors using getter methods
     */

    //would have other POs in here for other tests but in the interest of time, just doing the vital ones for happy path

    get cancelButton()
    {
        return $('#cancel')
    }

    get finishButton()
    {
        return $('#finish')
    }

    async finishCheckout()
    {
        this.finishButton.click();
    }

    //can't seem to get here without going through step-one first so no open() method
}

module.exports = new CheckoutStepTwoPage();
