import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'About Us', exact: true }).click();
  await page.getByText('We are a global diaspora of').click();
  await page.getByRole('img', { name: 'Darsana Engineers' }).first().click();
  await page.getByRole('main').getByRole('img').nth(2).click();
  await page.getByRole('img', { name: 'Darsana Engineers' }).click();
  await page.getByText('Darsana was established in').click();
  await page.getByRole('button', { name: 'WHAT WE DO' }).click();
  await page.getByText('We have undertaken many').click();
  await page.getByRole('button', { name: 'OBJECTIVES' }).click();
  await page.getByText('Under the banner of Darsana,').click();
  await page.getByRole('button', { name: 'GENERAL INFORMATION' }).click();
  await page.getByText('Darsana is a professionally').click();
  await page.getByRole('img', { name: 'Darsana building' }).click();
  await page.getByRole('button', { name: 'CHAPTERS' }).click();
  await page.getByText('As its members were widely').click();
  await page.getByRole('img', { name: 'Darsana building' }).click();
  await page.getByRole('button', { name: 'PRESENT LEADERSHIP' }).click();
  await page.getByRole('img', { name: 'Manoj K C' }).click();
  await page.getByRole('img', { name: 'Sunil N Menon' }).click();
  await page.getByRole('img', { name: 'Sunil N Menon' }).click();
  await page.getByText('OUR STORYWHAT WE').click();
  await page.getByRole('button', { name: 'TIMELINE' }).click();
});