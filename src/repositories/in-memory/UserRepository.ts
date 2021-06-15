import User, { IUser } from "../../models/User";
import { ICreateUserDTO, IUserRepository } from "../../interfaces/repositories/IUserRepository";

export class UserRepositoryInMemory implements IUserRepository {
    private users: IUser[] = []

    async create({ name, email, password }: ICreateUserDTO): Promise<IUser> {
        const user = new User()

        Object.assign(user, {
            _id: Math.random().toString(36).substring(7),
            name,
            email,
            password
        });

        this.users.push(user);
        return user;
    }
    async findByEmail(email: string): Promise<IUser | null> {
        return this.users.find(user => user.email === email) || null
    }

    async findById(id: string): Promise<IUser | null> {
        return this.users.find(user => user._id === id) || null;
    }

    async list(): Promise<IUser[]> {
        return this.users
    }

}
