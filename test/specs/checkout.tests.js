const LoginPage = require('../pageobjects/login.page'); //only including cuz I can't seem to set the login cookie properly
const CartPage = require('../pageobjects/cart.page');
const CheckoutOne = require('../pageobjects/checkout-step-one.page');
const CheckoutTwo = require('../pageobjects/checkout-step-two.page');

describe('Checkout tests', () => {
    before(async function () {
        //CartPage.setLoginCookie(); //this isn't working properly, not much time to debug
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await CartPage.open();
    });

    describe('Checkout flow happy path with 2 items in cart', async () => {

        before(async function () {
            await CartPage.setCartContents([1, 2]);
        })

        it('should complete checkout', async () => {
            //await expect(CartPage.getCartContentsLength()).toEqual(2); //make sure my before function worked
            //TODO: verify we've got the right contents w/ more page objects here
            await CartPage.continueCheckoutProcess();
            await CheckoutOne.fillOutFormAndContinue('tester', 'mctesterson', '48322');
            //TODO: verify we've got the right contents w/ more page objects here
            await CheckoutTwo.finishCheckout();
            //obviously more I can do here to verify things work, but this site shows a success for every checkout no matter what
        });

        //more tests can be done here to add to cart from other methods, but just doing one to prove thigns out
    })
});


