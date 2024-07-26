// @ts-check
import { test, expect } from '@playwright/test'

const LOCAL_HOST_URL = 'http://localhost:5173/'
const API_KEY = 'd9c5495b'

test('has search movies', async ({ page }) => {
  await page.goto(LOCAL_HOST_URL);
  
  const title = await page.getByText('Test Search Movies')
  const hasTitle = await title.textContent()
  await expect(hasTitle?.length).toBeGreaterThan(0)
  
  //Verifica algo en el input y su valor
  const input = await page.$('#input')
  await input?.fill('Avengers')
  const search = await input?.inputValue()

  expect(search).not.toBeNaN()
  
  // Verifica que se puede acceder a la API
  const API = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
  const response = await fetch(API)
  await expect(response?.status).toBe(200)

  //Verificar la respuesta de la API
  const data = await response.json()
  const movies = data.Search
  expect(movies?.length).toBeGreaterThan(0)

});