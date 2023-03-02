import { User } from "@/interfaces/users.interface";
import userModel from "@/models/users.model";
import { HttpException } from '@exceptions/HttpException';

class UserService {
    public users = userModel;

    public async findAllUsers() : Promise<User[]> {
        const users: User[] = this.users;
        return users;
    }

    public async findUserById(userId:number): Promise<User> {
        const findUser: User| undefined = this.users.find(user => user.id=== userId);
        if(!findUser) throw new HttpException(404, "User doesn't exist.")
        return findUser;
    }
}

export default UserService;