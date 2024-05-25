const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('@wdio/globals');
const loginPage = require('../pages/login.page');
const registerPage = require('../pages/register.page');
const { config } = require('../../wdio.conf');

const data = {
  namaToko: 'fajrinstore',
  email: 'fajrinStore@gmail.com',
  password: 'FajrinStore3',
  invalidEmail: 'fajrin@gmail',
};

Given(/^User open Register page$/, async () => {
  await browser.url(config.baseUrl);
  await (await loginPage.daftarTxt).click();
});

When(/^User didn't input all mandatory field$/, async () => {
  await (await registerPage.daftarBtn).click();
});

When(
  /^User input valid nama toko, invalid email, and valid password$/,
  async () => {
    await registerPage.inputNamaToko(data.namaToko);
    await registerPage.inputEmail(data.invalidEmail);
    await registerPage.inputPassword(data.password);
    await (await registerPage.daftarBtn).click();
  }
);

Then(/^User should see register error message$/, async () => {
  await expect(await registerPage.errorMessage).toBeDisplayed();
});

When(/^User input valid data$/, async () => {
  await registerPage.inputNamaToko(data.namaToko);
  await registerPage.inputEmail(data.email);
  await registerPage.inputPassword(data.password);
  await (await registerPage.daftarBtn).click();
});

Then(/^User should be on the Login page$/, async () => {
  await expect(await registerPage.successMessage).toBeDisplayed();
  await expect(await registerPage.successMessage).toHaveText(
    'Toko berhasil didaftarkan'
  );
  await expect(browser).toHaveUrl(`${config.baseUrl}/login`);
});
