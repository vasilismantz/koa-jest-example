const request = require('supertest');
const app3 = require('../app');

const mockListen = jest.fn();
app3.listen = mockListen;

afterEach(() => {
  mockListen.mockReset();
});

test('Server works', async () => {
  require('../server');
  expect(mockListen.mock.calls).toHaveLength(1);
  expect(mockListen.mock.calls[0][0]).toBe(process.env.PORT || 3000);
});
