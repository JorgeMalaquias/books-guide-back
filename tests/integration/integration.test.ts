import prisma from '../../src/database/database';
import supertest from 'supertest';
import app from "../../src/app";
import { faker } from '@faker-js/faker';

beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE "Users" CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Titles" CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Publishers" CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Authors" CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Titles" CASCADE;`;
});


afterAll(async () => {
  await prisma.$disconnect();
});



describe('Test POST /register', () => {
  it('Should return status 201 and the new user created when everything go well', async () => {
    const body = {
      email: 'jojo@email.com',
      password: 'xablau',
      confirmPassword: 'xablau',
      name: 'jojo',
      imageUrl: 'https://xablau'
    }
    const result = await supertest(app).post(`/register`).send(body);
    expect(result.status).toBe(201);
    expect(result.body).toMatchObject({ email: body.email, password: result.body.password, name: body.name, imageUrl: body.imageUrl });
  });

  it('Should return status 422 when the body of the request is invalid (invalid email)', async () => {
    const body = {
      email: 'jojoemail.com',
      password: 'xablau',
      confirmPassword: 'xablau'
    }
    const result = await supertest(app).post(`/register`).send(body);
    expect(result.status).toBe(422);
  });
  it('Should return status 422 when the body of the request is invalid (invalid password)', async () => {
    const body = {
      email: 'jojo@email.com',
      password: 1,
      confirmPassword: 1
    }
    const result = await supertest(app).post(`/register`).send(body);
    expect(result.status).toBe(422);
  });
  it('Should return status 400 when the passwords of the body are not the same', async () => {
    const body = {
      email: 'jojo@email.com',
      password: 'xablau',
      confirmPassword: 'xab',
      name: 'jojo',
      imageUrl: 'https://xablau'
    }
    const result = await supertest(app).post(`/register`).send(body);
    expect(result.status).toBe(400);
  });
  it('Should return status 409 if the email sent by the body were already been used', async () => {
    const body = {
      email: 'jojo@email.com',
      password: 'xablau',
      confirmPassword: 'xablau',
      name: 'jojo',
      imageUrl: 'https://xablau'
    }
    await supertest(app).post(`/register`).send(body);
    const result = await supertest(app).post(`/register`).send(body);
    expect(result.status).toBe(409);
  });
});


describe('Test POST /login', () => {
  it('Should return status 200 and the new token generated when everything go well', async () => {
    const bodyRegister = {
      email: 'jojo@email.com',
      password: 'xablau',
      confirmPassword: 'xablau',
      name: 'jojo',
      imageUrl: 'https://xablau'
    }
    const body = {
      email: 'jojo@email.com',
      password: 'xablau'
    }
    await supertest(app).post(`/register`).send(bodyRegister);
    const result = await supertest(app).post(`/login`).send(body);
    expect(result.status).toBe(200);
    console.log(result.body);
    expect(result.body).toBeInstanceOf(Object);
  });
  it('Should return status 422 when the body of the request is invalid', async () => {
    const body = {
      email: 'jojo@email.com'
    }
    const result = await supertest(app).post(`/login`).send(body);
    expect(result.status).toBe(422);
  });
  it('Should return status 404 when the requested user does not exist', async () => {
    const body = {
      email: 'jojo@email.com',
      password: 'xablau'
    }
    const result = await supertest(app).post(`/login`).send(body);
    expect(result.status).toBe(404);
  });
  it('Should return status 401 when the informed password is wrong', async () => {
    const bodyRegister = {
      email: 'jojo@email.com',
      password: 'xablau',
      confirmPassword: 'xablau',
      name: 'jojo',
      imageUrl: 'https://xablau'
    }
    const body = {
      email: 'jojo@email.com',
      password: 'xabla'
    }
    await supertest(app).post(`/register`).send(bodyRegister);
    const result = await supertest(app).post(`/login`).send(body);
    expect(result.status).toBe(401);
  });
});

describe('Test POST /titles', () => {
  it('Testing the case of success in creatinga new title', async () => {
    const bodyRegister = {
      email: 'jojo@email.com',
      password: 'xablau',
      confirmPassword: 'xablau',
      name: 'jojo',
      imageUrl: 'https://xablau'
    }
    const bodyLogin = {
      email: 'jojo@email.com',
      password: 'xablau'
    }
    await supertest(app).post(`/register`).send(bodyRegister);
    const logging = await supertest(app).post(`/login`).send(bodyLogin);
    const body = {
      name:'Naruto vol. 1',
      imageUrl: 'https://narutin',
      author: 'Masashi Kishimoto',
      publisher: 'Shueisha',
      description: 'Eu vou ser hokage dattebayo!'
    }
    const result = await supertest(app).post(`/titles`).send(body).set({authorization: 'Bearer ' + logging.body.token});
    expect(result.status).toBe(201);
  });
  it('Testing the case of success in creatinga new title', async () => {
    const bodyRegister = {
      email: 'jojo@email.com',
      password: 'xablau',
      confirmPassword: 'xablau',
      name: 'jojo',
      imageUrl: 'https://xablau'
    }
    const bodyLogin = {
      email: 'jojo@email.com',
      password: 'xablau'
    }
    await supertest(app).post(`/register`).send(bodyRegister);
    const logging = await supertest(app).post(`/login`).send(bodyLogin);
    const body = {
      name:'Naruto vol. 1',
      imageUrl: 'https://narutin',
      author: 'Masashi Kishimoto',
      publisher: 'Shueisha',
      description: 'Eu vou ser hokage dattebayo!'
    }
    const result = await supertest(app).post(`/titles`);
    expect(result.status).toBe(401);
  });
})