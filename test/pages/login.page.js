class loginPage {
  get emailInput() {
    return $('#email');
  }
  get passwordInput() {
    return $('#password');
  }
  get loginBtn() {
    return $("//button['login']");
  }
  get errorMessage() {
    return $('div[role=alert]');
  }
  get daftarTxt() {
    return $("a[href='/register']");
  }

  async inputEmail(email) {
    await this.emailInput.setValue(email);
    await expect(await this.emailInput).toHaveValue(email);
  }

  async inputPassword(password) {
    await this.passwordInput.setValue(password);
    await expect(this.passwordInput).toHaveValue(password);
  }
}

module.exports = new loginPage();
