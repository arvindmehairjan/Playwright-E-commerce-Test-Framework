export class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameField = page.locator("#user-name");
        this.passwordField = page.locator("#password");
        this.loginBtn = page.getByRole('button', { name: 'Login' });
    }
    enterCredentials = async () => {
        await this.usernameField.type(process.env.USERNAME);
        await this.passwordField.type(process.env.PASSWORD);
        await this.loginBtn.click();
    }
}