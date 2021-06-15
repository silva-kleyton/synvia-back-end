import { AppError } from './../../errors/AppError';
import { IUserRepository } from '../../interfaces/repositories/IUserRepository';
import { IUser } from "../../models/User";

interface IRequest {
    name: string;
    email: string;
    password: string;
}

export class CreateUserUseCase {
    constructor(private userRepository: IUserRepository) { }

    async execute({ name, email, password }: IRequest): Promise<IUser> {
        const userExists = await this.userRepository.findByEmail(email);

        if (userExists) {
            throw new AppError('Usuário já existe');
        }

        const user = await this.userRepository.create({ name, email, password });

        return user;
    }
}