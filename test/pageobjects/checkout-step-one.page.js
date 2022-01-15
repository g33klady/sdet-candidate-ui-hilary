const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckoutStepOnePage extends Page {
    /**
     * define selectors using getter methods
     */

    get inputFirstName()
    {
        return $('#first-name')
    }

    get inputLastName()
    {
        return $('#last-name')
    }

    get inputPostalCode()
    {
        return $('#postal-code')
    }

    get cancelButton()
    {
        return $('#cancel')
    }

    get continueButton()
    {
        return $('#continue')
    }

    async fillOutFormAndContinue(firstname, lastname, postalcode)
    {
        this.inputFirstName.setValue(firstname);
        this.inputLastName.setValue(lastname);
        this.inputPostalCode.setValue(postalcode);
        this.continueButton.click();
    }

    open() {
        return super.open('checkout-step-one.html');
    }
}
module.exports = new CheckoutStepOnePage();
