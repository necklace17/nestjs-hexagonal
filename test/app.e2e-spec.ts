import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { CreateUserDto } from '../src/users/adapters/web/dto/create-user.dto';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });
  describe('POST /users', function () {
    it('should return a new user with uuid and same properties', async function () {
      let data: CreateUserDto = {
        userName: 'johnDoe123',
        firstName: 'John',
        surName: 'Doe',
        password: 'helloWorld',
      };
      let response = await request(app.getHttpServer())
        .post('/users')
        .send(data);
      expect(response.body.id).not.toBeNaN();
      expect(response.status).toEqual(201);
      expect(response.body.userName).toEqual(data.userName);
      expect(response.body.firstName).toEqual(data.firstName);
      expect(response.body.surName).toEqual(data.surName);
    });
  });
});
