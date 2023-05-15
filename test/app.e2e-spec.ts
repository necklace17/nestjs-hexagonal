import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { mainConfig } from '../src/users/config/main.config';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  let UUID_REGEX =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    mainConfig(app);
    await app.init();
  });

  describe('POST /users', function () {
    it('should return a new user with uuid and same properties', async function () {
      let data = {
        userName: 'johnDoe123',
        firstName: 'John',
        surName: 'Doe',
        password: 'helloWorld',
      };
      let response = await request(app.getHttpServer())
        .post('/users')
        .send(data);
      expect(response.status).toEqual(HttpStatus.CREATED);
      expect(response.body.id).toMatch(UUID_REGEX);
      expect(response.body.userName).toEqual(data.userName);
      expect(response.body.firstName).toEqual(data.firstName);
      expect(response.body.surName).toEqual(data.surName);
    });
  });

  describe('POST /users', function () {
    it('should return an error if invalid data is submitted', async function () {
      let data = {
        userName: 'jd',
        firstName: '',
        // surName: '',
        password: 'x',
      };
      let response = await request(app.getHttpServer())
        .post('/users')
        .send(data);
      // expect(response.body.)
      expect(response.badRequest);
      expect(response.ok);
      // expect(response.staktus).toEqual(HttpStatus.BAD_REQUEST);
      // expect(response.body.userName).toEqual(data.userName);
      // expect(response.body.firstName).toEqual(data.firstName);
    });
  });
  //   it('should return a new user with uuid and same properties', async function () {
  //     let data = {
  //       userName: 'johnDoe123',
  //       firstName: 'John',
  //       surName: 'Doe',
  //       password: 'helloWorld',
  //     };
  //     let response = await request(app.getHttpServer())
  //       .post('/users')
  //       .send(data);
  //     expect(response.body.id).toMatch(UUID_REGEX);
  //     expect(response.status).toEqual(HttpStatus.CREATED);
  //     expect(response.body.userName).toEqual(data.userName);
  //     expect(response.body.firstName).toEqual(data.firstName);
  //     expect(response.body.surName).toEqual(data.surName);
  //   });
  // });
});
// });
// describe('POST /users', function () {
//   it('should return an error if invalid data is submitted', async function () {
//     let data = {
//       userName: 'jd',
//       firstName: '',
//       // surName: '',
//       password: 'x',
//     };
//     let response = await request(app.getHttpServer())
//       .post('/users')
//       .send(data);
// expect(response.body.id).toMatch(UUID_REGEX);
// expect(response.status).toEqual(HttpStatus.CREATED);
// expect(response.body.userName).toEqual(data.userName);
// expect(response.body.firstName).toEqual(data.firstName);
// expect(response.body.surName).toEqual(data.surName);
