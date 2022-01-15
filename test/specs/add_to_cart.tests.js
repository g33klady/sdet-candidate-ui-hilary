const LoginPage = require('../pageobjects/login.page'); //only including cuz I can't seem to set the login cookie properly
const InventoryPage = require('../pageobjects/inventory.page');
const CartPage = require('../pageobjects/cart.page');

describe('Adding To Cart tests', () => {
    before(async function () {
        //InventoryPage.setLoginCookie(); //can't get this to work atm
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await InventoryPage.open(); 
    });

    describe('Add to cart from Inventory Listing page', async () => {

        it('should add an item to the cart when clicking Add To Cart on Inventory Listing page', async () => {
            await InventoryPage.addBackpackToCart();
            await CartPage.open();
            await CartPage.waitForCheckoutButton();
            await expect(CartPage.getCartContentsLength()).toEqual(1); 
            //obviously more I can do here to verify but I'm getting carried away lol
        });

        //more tests can be done here to add to cart from other methods, but just doing one to prove thigns out
    })
});


