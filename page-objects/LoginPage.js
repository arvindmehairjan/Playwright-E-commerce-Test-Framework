
export class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameField = page.locator("#user-name");
        this.passwordField = page.locator("#password");
        this.loginBtn = page.getByRole('button', { name: 'Login' });
    }
    enterCredentials = async () => {
        await this.usernameField.fill("standard_user");
        await this.passwordField.fill("secret_sauce");
        await this.loginBtn.click();
    }
}