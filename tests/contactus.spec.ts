import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Contact us' }).click();
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('shadil');
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').fill('am');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('shadilrayyan2@gmail,com');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('shadilrayyan2@gmail.com');
  await page.getByLabel('Phone Number').click();
  await page.getByLabel('Phone Number').fill('+91 9995695010');
  await page.getByLabel('Subject').click();
  await page.getByLabel('Subject').fill('scholarship');
  await page.getByLabel('Message').click();
  await page.getByLabel('Message').fill('why was my scholarship was rejected the application id :13e53526244');
  await page.locator('div').filter({ hasText: /^I understand and agree to the Privacy Policy$/ }).click();
  await page.getByText('Contact InformationVisit').click();
  await page.getByRole('heading', { name: 'Email Us' }).click();
  await page.getByRole('heading', { name: 'Call Us' }).click();
  await page.getByRole('heading', { name: 'Call Us' }).click();
  await page.getByRole('heading', { name: 'Visit Us' }).click();
});