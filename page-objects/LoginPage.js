import { log } from "console";

export class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameField = page.locator("#user-name");
        this.passwordField = page.locator("#password");
        this.loginBtn = page.getByRole('button', { name: 'Login' });
        this.errorText = page.locator("[data-test='error']");
    }
    enterCredentials = async () => {
        await this.usernameField.type(process.env.ECOMMERCE_USERNAME);
        await this.passwordField.type(process.env.ECOMMERCE_PASSWORD);
        await this.loginBtn.click();
    }

    errorMessageIsVisible = async () => {
        await expect(errorText).toBeVisible();
    }
}