# Interview User Stories

## Checkout

As a user, I want to add a product to cart, so I can purchase it.  

* Identify the various ways a user can uniquely add a product to the cart.
    * inventory page - add to cart buttons
    * click image -> product page - add to cart button
    * click link -> product page - add to cart button
    * not necessarily a user, but for automation - local storage array w/ key cart-contents
* Create tests that exercise those scenarios and succesfully place orders.
    * On inventory page, click Add to Cart for 1 product, go to cart - verify only 1 item in cart and is correct item
    * On inventory page, click Add to Cart for multiple products, go to cart - verify all products in cart are correct items
    * On inventory page, click image of item -> verify goes to correct product page
    * On inventory page, click link of item -> verify goes to correct product page
    * Go direct to a product page, click add to cart - go to cart - verify only 1 item in cart and is correct item
    * Go direct to cart w/ items in local storage -> verify checkout process (click checkout, goes to checkout-step-one page, fill that out, checkout-step-two - verify contents, click finish - verify checkout-complete)
        * I don't see a way to set the values from step-one outside of the UI - I would ask for some modifications from the devs so the UI tests aren't slowed down by this process
    * NOTE: even with nothing in cart, can complete the checkout process without error - obviously something to talk to the devs about


## Sort

As a user, I want to sort products from high to low, so I know what I can afford.

* Create a test that sorts products from high to low.
* Confirm the ordering is correct by making sure the first product has the highest price on the page
