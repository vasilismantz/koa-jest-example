const supertest = require('supertest');
const app2 = require('../app');

test('Gets the / endpoint', async () => {
  const response = await supertest(app2.callback()).get('/');
  expect(response.status).toBe(200);
  expect(response.text).toMatchSnapshot();
});
