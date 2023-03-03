import request from 'supertest';
import App from '@/app';
import { User } from '@interfaces/users.interface';
import userModel from '@models/users.model';
import UserRoute from '@routes/users.route';

afterAll(async () => {
    await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
  });

  describe('Testing Users', () => {
    describe('[GET] /users', () => {
        it('response statusCode 200 / findAll', () => {
          const findUser: User[] = userModel;
          const usersRoute = new UserRoute();
          const app = new App([usersRoute]);
    
          return request(app.getServer()).get(`${usersRoute.path}`).expect(200, { data: findUser, message: 'findAll' });
        });
      });

      describe('[GET] /users/:id', () => {
        it('response statusCode 200 / findOne', () => {
          const userId = 1;
          const findUser: User | undefined = userModel.find(user => user.id === userId);
          const usersRoute = new UserRoute();
          const app = new App([usersRoute]);
    
          return request(app.getServer()).get(`${usersRoute.path}/${userId}`).expect(200, { data: findUser, message: 'findOne' });
        });
      });
  })