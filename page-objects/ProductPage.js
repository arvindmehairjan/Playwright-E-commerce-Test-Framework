import { expect } from "@playwright/test";

export class ProductPage {
    constructor(page) {
        this.page = page;
        this.title = page.locator(".title");
        this.productName = page.locator(".inventory_item_name");
        this.productPrice = page.locator(".inventory_item_price");
        this.shoppingCart = page.locator(".shopping_cart_badge");
    }

    addToCart = async (productIndex, productName, productPrice) => {
        await this.title.waitFor();
        let getProductName = await this.productName.nth(productIndex).textContent()
        await expect(getProductName).toEqual(productName);
        let getPrice = await this.productPrice.nth(productIndex).textContent()
        await expect(getPrice).toEqual(productPrice);
        await this.page.getByRole('button', { name: 'Add to cart' }).nth(productIndex).click();
    }

    clickOnCart = async (expectedCount) => {
        let getNumbersInCart = parseInt(await this.shoppingCart.textContent());
        await expect(getNumbersInCart).toEqual(expectedCount);
        await this.shoppingCart.click();
    }

}