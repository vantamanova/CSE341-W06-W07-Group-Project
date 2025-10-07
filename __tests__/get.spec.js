const app = require('../server');
const supertest = require('supertest');
const request = supertest(app);

describe('GET Endpoints', () => {
  // GET ALL for root
  test('GET / should return 200 and JSON', async () => {
    const res = await request.get('/');
    expect(res.statusCode).toBe(200);
    expect(res.headers['content-type']).toMatch(/json/);
  });

  // GET ALL for users
  test('GET /users should return 200 and JSON', async () => {
    const res = await request.get('/users');
    expect(res.statusCode).toBe(200);
    expect(res.headers['content-type']).toMatch(/json/);
  });

    // GET ALL for characters
  test('GET /characters should return 200 and JSON', async () => {
    const res = await request.get('/characters');
    expect(res.statusCode).toBe(200);
    expect(res.headers['content-type']).toMatch(/json/);
  });

  // GET ONE for users
  test('GET /users/:id should return one user or 404', async () => {
    const fakeUserId = '66f5e81b2c6f4d2f449e8a99';
    const res = await request.get(`/users/${fakeUserId}`);
    expect([200, 404]).toContain(res.statusCode);
    expect(res.headers['content-type']).toMatch(/json/);
  });

  // GET ONE for characters
  test('GET /characters/:id should return one character or 404', async () => {
    const fakeCharacterId = '66f5e81b2c6f4d2f449e8a99';
    const res = await request.get(`/characters/${fakeCharacterId}`);
    expect([200, 404]).toContain(res.statusCode);
    expect(res.headers['content-type']).toMatch(/json/);
  });
});
