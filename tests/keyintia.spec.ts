import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'Key Initiatives' }).click();
  await page.getByRole('link', { name: 'Prabkaran Memorial' }).click();
  await page.getByRole('button', { name: 'Key Initiatives' }).click();
  await page.getByRole('link', { name: 'Skill Development' }).click();
  await page.getByText('Sign InOpen main menuHomeAbout usKey InitiativesInitiativesProduct').click();
  await page.getByRole('link', { name: 'Bridge' }).click();
  await page.getByRole('button', { name: 'Key Initiatives' }).click();
  await page.getByRole('link', { name: 'Biju Cheriyan Endowment' }).click();
  await page.getByText('Sign InOpen main menuHomeAbout usKey InitiativesInitiativesProduct').click();
  await page.getByRole('link', { name: 'House Construction' }).click();
  await page.getByRole('img', { name: 'Key handover for house' }).click();
  await page.getByText('As a socially committed').click();
  await page.getByText('Darsana also decided to use').click();
  await page.getByRole('button', { name: 'Key Initiatives' }).click();
  await page.getByRole('link', { name: 'Course Explorer' }).click();
  await page.getByRole('heading', { name: 'Course Explorer' }).click();
  await page.getByRole('img', { name: 'Course Explorer' }).click();
  await page.getByText('The Darsana Calicut chapter').click();
  await page.getByText('The sessions on the first day').click();
});