import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'Initiatives', exact: true }).click();
  await page.getByRole('link', { name: 'Covid Care Support' }).click();
  await page.getByRole('img', { name: 'Covid Care Support' }).click();
  await page.getByText('Covid Care SupportDarsana has').click();
  await page.getByRole('button', { name: 'Initiatives', exact: true }).click();
  await page.getByRole('link', { name: 'Ambulance to Palliative Care' }).click();
  await page.getByRole('heading', { name: 'Ambulance to Palliative Care' }).click();
  await page.getByText('Ambulance to Palliative Care UnitDarsana contributed an Ambulance for EMS Jana').click();
  await page.getByRole('button', { name: 'Initiatives', exact: true }).click();
  await page.getByRole('link', { name: 'Job Fair' }).click();
  await page.getByText('Job FairDarsana conducted a').click();
  await page.getByRole('button', { name: 'Initiatives', exact: true }).click();
  await page.getByRole('link', { name: 'Technology Corner' }).click();
  await page.getByText('Technology CornerProf. K').click();
  await page.getByRole('button', { name: 'Initiatives', exact: true }).click();
  await page.getByRole('link', { name: 'Seminar on Restructuring' }).click();
  await page.getByText('Seminar on Restructuring Engineering EducationThe seminar we conducted at').click();
  await page.getByRole('button', { name: 'Initiatives', exact: true }).click();
  await page.getByRole('link', { name: 'Sholayur Educational Support' }).click();
  await page.getByText('Sholayur Educational Support ProgramDarsana intervenes to provide constructive').click();
  await page.getByRole('button', { name: 'Initiatives', exact: true }).click();
});