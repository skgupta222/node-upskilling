import { CreateUserDto } from '@/dtos/users.dto';
import { User } from '@/interfaces/users.interface';
import userModel from '@/models/users.model';
import { isEmpty } from '@/utils/util';
import { HttpException } from '@exceptions/HttpException';
import { hash } from 'bcrypt';

class UserService {
  public users = userModel;

  public async findAllUsers(): Promise<User[]> {
    const users: User[] = this.users;
    return users;
  }

  public async findUserById(userId: number): Promise<User> {
    const findUser: User | undefined = this.users.find((user) => user.id === userId);
    if (!findUser) throw new HttpException(404, "User doesn't exist.");
    return findUser;
  }

  public async createUser(userData: CreateUserDto): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, 'userData is empty');

    const findUser: User | undefined = this.users.find((user) => user.email === userData.email);
    if (findUser) throw new HttpException(409, `This email ${userData.email} already exists`);

    const hashedPassword = await hash(userData.password, 10);
    const createUserData: User = { id: this.users.length + 1, ...userData, password: hashedPassword };
    this.users = [...this.users, createUserData];

    return createUserData;
  }
}

export default UserService;
