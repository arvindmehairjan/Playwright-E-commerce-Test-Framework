const { test, expect } = require('@playwright/test');

test('Test GET request', async ({ page }) => {
  const getResponse = await page.evaluate(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return response.json();
  });

  expect(getResponse.userId).toBe(1);
  expect(getResponse.id).toBe(1);
  expect(getResponse.title).toBe('delectus aut autem');
  expect(getResponse.completed).toBe(false);
});

test('Test POST request', async ({ page }) => {
  const postResponse = await page.evaluate(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
    });
    return response.json();
  });

  expect(postResponse.title).toBe('foo');
  expect(postResponse.body).toBe('bar');
  expect(postResponse.userId).toBe(1);
});
