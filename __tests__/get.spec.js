const app = require('../server');
const supertest = require('supertest');
const request = supertest(app);

describe('GET Endpoints', () => {
  // Root
  test('GET / should return 200 and JSON', async () => {
    const res = await request.get('/');
    expect(res.statusCode).toBe(200);
    expect(res.headers['content-type']).toMatch(/json/);
  });

  // USERS
  test('GET /users should return 200 and JSON', async () => {
    const res = await request.get('/users');
    expect(res.statusCode).toBe(200);
    expect(res.headers['content-type']).toMatch(/json/);
  });

  test('GET /users/:id should return one user or 404', async () => {
    const fakeUserId = '66f5e81b2c6f4d2f449e8a99';
    const res = await request.get(`/users/${fakeUserId}`);
    expect([200, 404]).toContain(res.statusCode);
    expect(res.headers['content-type']).toMatch(/json/);
  });

  // CHARACTERS
  test('GET /characters should return 200 and JSON', async () => {
    const res = await request.get('/characters');
    expect(res.statusCode).toBe(200);
    expect(res.headers['content-type']).toMatch(/json/);
  });

  test('GET /characters/:id should return one character or 404', async () => {
    const fakeCharacterId = '66f5e81b2c6f4d2f449e8a99';
    const res = await request.get(`/characters/${fakeCharacterId}`);
    expect([200, 404]).toContain(res.statusCode);
    expect(res.headers['content-type']).toMatch(/json/);
  });

  // GAMES
  test('GET /games should return 200 and JSON', async () => {
    const res = await request.get('/games');
    expect(res.statusCode).toBe(200);
    expect(res.headers['content-type']).toMatch(/json/);
  });

  test('GET /games/:id should return one game or 404', async () => {
    const fakeGameId = '66f5e81b2c6f4d2f449e8a99';
    const res = await request.get(`/games/${fakeGameId}`);
    expect([200, 404]).toContain(res.statusCode);
    expect(res.headers['content-type']).toMatch(/json/);
  });

  // PLATFORMS
  test('GET /platforms should return 200 and JSON', async () => {
    const res = await request.get('/platforms');
    expect(res.statusCode).toBe(200);
    expect(res.headers['content-type']).toMatch(/json/);
  });

  test('GET /platforms/:id should return one platform or 404', async () => {
    const fakePlatformId = '66f5e81b2c6f4d2f449e8a99';
    const res = await request.get(`/platforms/${fakePlatformId}`);
    expect([200, 404]).toContain(res.statusCode);
    expect(res.headers['content-type']).toMatch(/json/);
  });
});
