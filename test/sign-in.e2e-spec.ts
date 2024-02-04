import { expect, test } from '@playwright/test'

test('sign in successfully', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })
  await page.getByLabel('Seu e-mail').fill('test@a.com')
  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const toast = page.getByText(
    'Enviamos um link de autenticação para seu e-mail.',
  )

  await expect(toast).toBeVisible()
})

test('sign in with wrong email', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })
  await page.getByLabel('Seu e-mail').fill('wrong@email.com')
  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const toast = page.getByText('O e-mail não está registrado.')

  await expect(toast).toBeVisible()
})

test('navigate to new restaurant page', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })
  await page.getByRole('link', { name: 'Novo estabelecimento' }).click()

  expect(page.url()).toContain('/sign-up')
})
