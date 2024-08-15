// __tests__/app.test.js
const request = require('supertest');
const { app, server } = require('../app');

afterAll((done) => {
    server.close(done); // Close the server after tests are complete
});

describe('GET /', () => {
    it('should return Hello, World!', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello, World!');
    });
});
