import { ICreateUserDTO, IUserRepository } from '../../interfaces/repositories/IUserRepository';
import User, { IUser } from '../../models/User';


export class UserRepository implements IUserRepository {
    private user: import("mongoose").Model<IUser, {}, {}>;

    private static _instance: UserRepository;

    constructor() {
        this.user = User;
    }

    public static getInstance(): UserRepository {
        if (!UserRepository._instance) {
            return UserRepository._instance = new UserRepository()
        }
        return UserRepository._instance
    }

    async create({ name, email, password }: ICreateUserDTO): Promise<IUser> {
        return await this.user.create({ name, email, password });
    }

    async findByEmail(email: string): Promise<IUser | null> {
        return await this.user.findOne({ email });
    }

    async findById(id: string): Promise<IUser | null> {
        return await this.user.findById(id);
    }

    async list(): Promise<IUser[]> {
        return await this.user.find();
    }

}