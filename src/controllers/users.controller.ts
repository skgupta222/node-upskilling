import { User } from '@/interfaces/users.interface';
import userService from '@services/users.service';
import { NextFunction, Request, Response } from 'express';

class UsersController {

    public userService = new userService();

    public getUsers =async(req:Request, res: Response, next: NextFunction) => {
    try {
        const allUsersData: User[] = await this.userService.findAllUsers();

        res.status(200).json({data: allUsersData, message: 'findAll'});

    } catch (error) {
        next(error);
    }
    }

}

export default UsersController;