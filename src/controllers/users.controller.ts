import { CreateUserDto } from '@/dtos/users.dto';
import { User } from '@/interfaces/users.interface';
import userService from '@services/users.service';
import { NextFunction, Request, Response } from 'express';

class UsersController {
  public userService = new userService();

  public getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const allUsersData: User[] = await this.userService.findAllUsers();

      res.status(200).json({ data: allUsersData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getUserById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = Number(req.params.id);

      const findSingleUser = await this.userService.findUserById(userId);

      res.status(200).json({ data: findSingleUser, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userData: CreateUserDto = req.body;
      const createUserData: User = await this.userService.createUser(userData);

      res.status(201).json({ data: createUserData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };
}

export default UsersController;
