import { AppError } from './../../errors/AppError';
import { IUserRepository } from "../../interfaces/repositories/IUserRepository";
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken'

const { ACCESS_TOKEN_SECRET } = process.env

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    };
    accessToken: string;
}

export class AuthenticateUserUseCase {
    constructor(private userRepository: IUserRepository) { }

    async execute({ email, password }: IRequest): Promise<IResponse> {
        const user = await this.userRepository.findByEmail(email);

        if (!user) {
            throw new AppError("Email ou senha incorretos");
        }

        const comparePassword = await compare(password, user.password)

        if (!comparePassword) {
            throw new AppError("Email ou senha incorretos")
        }

        const accessToken = sign({}, ACCESS_TOKEN_SECRET!, {
            subject: String(user._id),
            expiresIn: "1d"
        });

        const userToken: IResponse = {
            user: {
                name: user.name,
                email: user.email,
            },
            accessToken
        }

        return userToken
    }
}