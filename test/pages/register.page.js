class registerPage {
  get namaTokoInput() {
    return $('#name');
  }
  get emailInput() {
    return $('#email');
  }
  get passwordInput() {
    return $('#password');
  }
  get daftarBtn() {
    return $("button[type='submit']");
  }
  get errorMessage() {
    return $('div[role=alert]');
  }
  get successMessage() {
    return $("ul[id='chakra-toast-manager-top-right'] div[class*='_title']");
  }

  async inputNamaToko(namaToko) {
    await (await this.namaTokoInput).setValue(namaToko);
    await expect(await this.namaTokoInput).toHaveValue(namaToko);
  }

  async inputEmail(email) {
    await (await this.emailInput).setValue(email);
    await expect(await this.emailInput).toHaveValue(email);
  }

  async inputPassword(password) {
    await (await this.passwordInput).setValue(password);
    await expect(await this.passwordInput).toHaveValue(password);
  }
}

module.exports = new registerPage();
